<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ProductsController extends Controller
{

    private function getCartData()
    {
        // fetch cart item count and total value for the authenticated user
        $cartItems = auth()->check() ? auth()->user()->cartItems()->with('products')->get() : collect([]);
        $cartItemCount = $cartItems->sum('quantity');
        $cartTotalValue = $cartItems->sum(function ($item) {
            return $item->quantity * $item->products->price;
        });

        return [
            'cartItemCount' => $cartItemCount,
            'cartTotalValue' => $cartTotalValue
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // fetch products that's a month recent
        $startDate = now()->subMonth();
        $endDate = now();

        // fetched products with its category
        $products = Products::with('category')->whereDate('created_at', '>=', $startDate)
            ->whereDate('created_at', '<=', $endDate)->latest()->queryFilter(request(['category']))->paginate(6);

        $categories = Categories::get();

        // fetch cart data
        $cartData = $this->getCartData();

        // TODO: subtract to the cart for every made purchase (if it's in the cart)

        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'products' => $products,
            'categories' => $categories,
            'cartItemCount' => $cartData['cartItemCount'],
            'cartTotalValue' => $cartData['cartTotalValue']
        ]);
    }

    public function shop(Request $request)
    {
        // filter with query params
        $filteredProducts = Products::with('category')->latest()->queryFilter(Arr::except($request->query(), ['category']));

        $productsTotalCount = $filteredProducts->count();

        // fetch number of products associated with a certain category
        $categories = Categories::withCount(['products' => function ($query) use ($filteredProducts) {
            $query->whereIn('id', $filteredProducts->pluck('id'));
        }])
            ->get();

        $products = $filteredProducts->queryFilter(request(['category']))->paginate(6)->withQueryString();

        $resultsTotalCount = $filteredProducts->count();

        $filters = $request->query();

        // fetch cart data
        $cartData = $this->getCartData();

        return Inertia::render('Shop/Index', [
            'products' => $products,
            'categories' => $categories,
            'filters' => $filters,
            'productsTotalCount' => $productsTotalCount,
            'resultsTotalCount' => $resultsTotalCount,
            'cartItemCount' => $cartData['cartItemCount'],
            'cartTotalValue' => $cartData['cartTotalValue']
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->category_id) {
            $request['category_id'] = (int)$request->category_id;
        }

        $imagePath = '';

        if ($request->hasFile('image')) {
            $request->file('image')->move(public_path('images/chairs/'), $request->file('image')->getClientOriginalName());
            $imagePath = '/images/chairs/' . $request->file('image')->getClientOriginalName();
        }

        $validator = Validator::make($request->all(), [
            'category_id' => 'required|numeric',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|numeric'
        ]);

        $imageValidator = Validator::make(['image' => $imagePath], [
            'image' => 'required|string'
        ]);

        $validated = $validator->validated();
        $imageValidated = $imageValidator->validated();
        Products::create(array_merge($validated, $imageValidated));
        return redirect(route('products'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products, $id)
    {
        $product = Products::find((int) $id);

        $cartData = $this->getCartData();

        return Inertia::render('Product/Index', [
            'product' => $product,
            'cartItemCount' => $cartData['cartItemCount'],
            'cartTotalValue' => $cartData['cartTotalValue']
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Products $products, $id)
    {
        $request['category_id'] = (int)$request->category_id;

        $product = Products::find($id);

        // Check if the product exist
        if (!$product) {
            return back();
        }

        // Check if image is present in the request
        if ($request->hasFile('image')) {
            // Delete the old image
            if ($product->image) {
                $oldImagePath = public_path($product->image);
                if (File::exists($oldImagePath)) {
                    File::delete($oldImagePath);
                }
            }

            $request->file('image')->move(public_path('images/chairs/'), $request->file('image')->getClientOriginalName());

            $product->image = '/images/chairs/' . $request->file('image')->getClientOriginalName();
        }

        $validator = Validator::make($request->all(), [
            'category_id' => 'required|numeric',
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|numeric'
        ]);

        // Retrieve the validated input...
        $validated = $validator->validated();

        $product->update($validated);

        return redirect(route('products'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products, $id)
    {
        $product = Products::find($id);

        // Check if the product exist
        if (!$product) {
            return back();
        }

        // delete product from db
        $product->delete();

        return redirect(route('products'));
    }
}
