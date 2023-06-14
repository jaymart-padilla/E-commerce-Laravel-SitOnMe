<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CartItemsController;
use App\Http\Controllers\OrderItemsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// admin routes
Route::middleware(['auth', 'verified', 'admin'])->group(function () {
    Route::get('/dashboard', [AdminController::class, 'index'])->name('dashboard');
    Route::get('/products-list', [AdminController::class, 'products'])->name('products');
    Route::post('/products-list', [ProductsController::class, 'store'])->name('products.store');
    Route::patch('/products-list/{id}', [ProductsController::class, 'update'])->name('products.update');
    Route::delete('/products-list/{id}', [ProductsController::class, 'destroy'])->name('products.destroy');
    Route::get('/transactions', [AdminController::class, 'transactions'])->name('transactions');
    Route::patch('/transactions/{id}', [OrderItemsController::class, 'update'])->name('transactions.update');
    Route::get('/users', [AdminController::class, 'users'])->name('users');
    Route::patch('/users/{id}', [AdminController::class, 'update'])->name('users.update');
});

// user routes
Route::middleware(['auth', 'verified', 'users'])->group(function () {
    // cart
    Route::get('/cart', [CartItemsController::class, 'index'])->name('cart');
    Route::post('/cart', [CartItemsController::class, 'store']);
    Route::patch('/cart', [CartItemsController::class, 'update']);
    Route::delete('/cart/{id}', [CartItemsController::class, 'destroy']);
    // orders
    Route::get('/orders', [OrderItemsController::class, 'index'])->name('orders');
    Route::post('/orders', [OrderItemsController::class, 'store'])->name('orders.store');
});

// profile routes accessible to all authenticated users
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// all access
Route::get('/', function () {
    if (auth()->check() && auth()->user()->privilege === 'admin') {
        return redirect()->route('dashboard');
    } else {
        return app(ProductsController::class)->index();
    }
})->name('home');
Route::get('/products', [ProductsController::class, 'shop'])->name('shop');
Route::get('/products/{id}', [ProductsController::class, 'show'])->name('show');
Route::get('/about', [PageController::class, 'showAboutUs'])->name('about');
Route::get('/return-policy', [PageController::class, 'showReturnPolicy'])->name('return-policy');
Route::get('/contact-us', [PageController::class, 'showContactUs'])->name('contact-us');
Route::get('/terms-and-conditions', [PageController::class, 'showTermsAndConditions'])->name('terms-and-conditions');


require __DIR__ . '/auth.php';
