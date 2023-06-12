<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\OrderItems;
use App\Models\Products;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class AdminController extends Controller
{
    private function getPendingOrders()
    {
        $pendingOrders = OrderItems::with('products', 'user')->where('status', 'pending')->latest()->get();
        return $pendingOrders;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productCount = Products::count();
        $userCount = User::count();
        $orderCount = OrderItems::count();

        $pendingOrderCount = OrderItems::where('status', 'pending')->count();
        $acceptedOrderCount = OrderItems::where('status', 'accepted')->count();
        $availableProductCount = Products::where('stock', '>', 0)->count();
        $outOfStockProductCount = Products::where('stock', '<=', 0)->count();

        $pendingOrders = $this->getPendingOrders();

        return Inertia::render('Admin/Dashboard/Index', [
            'productCount' => $productCount,
            'userCount' => $userCount,
            'orderCount' => $orderCount,

            'pendingOrderCount' => $pendingOrderCount,
            'acceptedOrderCount' => $acceptedOrderCount,
            'availableProductCount' => $availableProductCount,
            'outOfStockProductCount' => $outOfStockProductCount,

            'pendingOrders' => $pendingOrders
        ]);
    }

    public function products(Request $request)
    {
        $products = Products::with('category')->latest()->queryFilter(request(['search']))->paginate(10)->withQueryString();
        $categories = Categories::get();

        $pendingOrders = $this->getPendingOrders();

        return Inertia::render('Admin/Products/Index', [
            'products' => $products, 'categories' => $categories, 'filters' => $request->only('search'), 'pendingOrders' => $pendingOrders
        ]);
    }

    public function transactions(Request $request)
    {
        $transactions = OrderItems::with('products', 'user', 'payment.paymentMethod')->latest()->queryFilter(request(['search', 'status']))->paginate(15)->withQueryString();

        $filters = $request->query();

        foreach ($transactions as $transaction) {
            $transaction->total_price = $transaction->products->price * $transaction->quantity;
        }

        $pendingOrders = $this->getPendingOrders();

        return Inertia::render('Admin/Transactions/Index', [
            'transactions' => $transactions,
            'filters' => $filters,
            'pendingOrders' => $pendingOrders
        ]);
    }

    public function users(Request $request)
    {
        $users = User::where('privilege', 'user')
            ->latest()
            ->queryFilter(request(['search']))
            ->paginate(10)
            ->withQueryString();

        $pendingOrders = $this->getPendingOrders();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users, 'filters' => $request->only('search'), 'pendingOrders' => $pendingOrders
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return back();
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($id),
            ],
        ]);

        // Retrieve the validated input...
        $validated = $validator->validated();

        $user->update($validated);
        return redirect()->route('transactions');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
