<?php

namespace App\Http\Controllers;

use App\Models\CartItems;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartItemsController extends Controller
{

    private function getCartData()
    {
        // fetch cart item count and total value for the authenticated user
        $cartItems = auth()->check() ? auth()->user()->cartItems()->with('products')->get() : collect([]);
        $cartItemCount = 0;
        $cartTotalValue = 0;

        // set the quantity of <each> cartItem if it is greater than the stock of the product
        foreach ($cartItems as $cartItem) {
            $product = $cartItem->products;
            $stock = $product->stock;

            // Set the quantity to the minimum of cart item quantity and stock
            $cartItem->quantity = min($cartItem->quantity, $stock);

            // Update the cart item in the database
            $cartItem->save();

            // Update cart item count and total value
            $cartItemCount += $cartItem->quantity;
            $cartTotalValue += $cartItem->quantity * $product->price;
        }

        return [
            'cartItems' => $cartItems,
            'cartItemCount' => $cartItemCount,
            'cartTotalValue' => $cartTotalValue
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cartData = $this->getCartData();

        return Inertia::render('Cart/Index', [
            'cartItems' => $cartData['cartItems'],
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
        $formFields = $request->validate(
            [
                'user_id' => 'Numeric',
                'product_id' => 'Numeric',
                'quantity' => 'Numeric',
            ]
        );

        $userId = auth()->id();
        $productId = $formFields['product_id'];
        $quantity = $formFields['quantity'];

        // Retrieve the product and its stock
        $product = Products::find($productId);
        $stock = $product->stock;

        // Check if the item already exists in the user's cart
        $existingCartItem = CartItems::where('user_id', $userId)
            ->where('product_id', $productId)
            ->first();

        if ($existingCartItem) {
            // Calculate the total quantity (existing quantity + form quantity)
            $totalQuantity = $existingCartItem->quantity + $quantity;

            if ($totalQuantity > $stock) {
                // Redirect back with an error message if the total quantity exceeds the stock
                return redirect()->back()->with('error', 'Total quantity exceeds product stock!');
            }

            // Update the quantity of the existing cart item
            $existingCartItem->quantity = $totalQuantity;
            $existingCartItem->save();
        } else {
            // Check if the form quantity exceeds the product stock
            if ($quantity > $stock) {
                // Limit the quantity to the product stock
                $quantity = $stock;
            }

            // Create a new cart item
            $formFields['user_id'] = $userId;
            $formFields['quantity'] = $quantity;
            CartItems::create($formFields);
        }

        return redirect()->back()->with('message', 'Added to cart!');
    }

    /**
     * Display the specified resource.
     */
    public function show(CartItems $cartItems)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CartItems $cartItems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // updates cartItem quantity
        $cartItem = CartItems::where('product_id', $request->id)->first();
        $cartItem->quantity = $request->quantity;
        $cartItem->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $cartItem = CartItems::where('product_id', $id)->first();

        $cartItem->delete();
        return redirect()->back()->with('message', 'Cart item removed!');
    }
}
