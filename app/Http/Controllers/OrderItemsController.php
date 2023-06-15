<?php

namespace App\Http\Controllers;

use App\Models\CartItems;
use App\Models\OrderItems;
use App\Models\Payments;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;

class OrderItemsController extends Controller
{
    private function getOrdersData()
    {
        // fetch cart item count and total value for the authenticated user
        $orderItems = auth()->check() ? auth()->user()->orderItems()->with('products')->get() : collect([]);

        return [
            'orderItems' => $orderItems,
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orderItems = $this->getOrdersData();

        // Sort the order items in descending order based on the updated_at column
        $orderItems['orderItems'] = $orderItems['orderItems']->sortByDesc('updated_at')->values();


        return Inertia::render('Orders/Index', [
            'orderItems' => $orderItems['orderItems']
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
        $orderItems = $request->all();

        // validation rules
        $rules = [
            'user_id' => 'numeric',
            'product_id' => 'numeric',
            'quantity' => 'numeric',
        ];

        foreach ($orderItems as $orderItem) {
            $formFields = Validator::validate($orderItem, $rules);

            $userId = auth()->id();
            $productId = $formFields['product_id'];
            $quantity = $formFields['quantity'];

            // Retrieve the product and its stock
            $product = Products::find($productId);
            $stock = $product->stock;

            // Check if the form quantity exceeds the product stock
            if ($quantity > $stock) {
                // Limit the quantity to the product stock
                $quantity = $stock;
            }

            // Create a new order item
            $formFields['user_id'] = $userId;
            $formFields['quantity'] = $quantity;

            $order = OrderItems::create($formFields);

            // Decrease the product stock
            $product->stock -= $quantity;
            $product->save();

            // Create a new payment entry for the order item
            $paymentFields = [
                'user_id' => $userId,
                'order_item_id' => $order->id,
                'payment_method_id' => 1,
            ];

            Payments::create($paymentFields);

            // Check if the ordered quantity matches the quantity in the cart
            $cartItem = CartItems::where('user_id', $userId)
                ->where('product_id', $productId)
                ->first();

            if ($cartItem && $cartItem->quantity <= $quantity) {
                // Remove the ordered product from the cart
                $cartItem->delete();
            } elseif ($cartItem) {
                // Update the quantity in the cart
                $cartItem->quantity -= $quantity;
                $cartItem->save();
            }
        }

        return redirect('/orders')->with('message', 'Added to your orders!');
    }


    /**
     * Display the specified resource.
     */
    public function show(OrderItems $orderItems)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderItems $orderItems)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderItems $orderItems, $id)
    {
        $orderItem = OrderItems::find((int) $id);

        // Check if the order exist
        if (!$orderItem) {
            return back();
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|string|max:255',
        ]);


        // Retrieve the validated input...
        $validated = $validator->validated();

        // FIXME: doing $orderItem->update($validated) doesn't work for some reason | hafta manually assign update :(
        $orderItem->status = $validated['status'];
        $orderItem->save();

        return redirect()->route('transactions');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderItems $orderItems)
    {
        //
    }
}
