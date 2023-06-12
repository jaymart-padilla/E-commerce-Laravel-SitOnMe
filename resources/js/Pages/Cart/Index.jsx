import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import CartProductItem from "./CartProductItem";
import Checkout from "./Checkout";
import NoProducts from "@/Components/404/NoProducts";

export default function Index({
    auth,
    cartItems,
    cartItemCount,
    cartTotalValue,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-200 leading-tight">
                    My Cart &mdash; (
                    {`${cartItemCount ? `${cartItemCount} items` : "Empty"}`})
                </h2>
            }
        >
            <Head title="Cart" />

            {/* main */}
            {cartItems.length !== 0 ? (
                <div className="grid grid-cols-12 lg:gap-7 md:px-4 xl:px-0 lg:py-7 max-w-7xl mx-auto">
                    <div className="col-span-12 lg:col-span-8 space-y-4">
                        {cartItems.map((cartItem) => {
                            const {
                                id,
                                products,
                                quantity: cartItemQuantity,
                                products: { stock },
                            } = cartItem;
                            return (
                                <CartProductItem
                                    auth={auth}
                                    products={products}
                                    quantity={Math.min(cartItemQuantity, stock)}
                                    key={id}
                                    className="rounded-md"
                                />
                            );
                        })}
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                        <Checkout
                            products={cartItems
                                .filter(
                                    (cartItem) => cartItem.products.stock > 0
                                )
                                .map((cartItem) => {
                                    const {
                                        quantity: cartItemQuantity,
                                        products: { stock },
                                    } = cartItem;
                                    cartItem.quantity = Math.min(
                                        cartItemQuantity,
                                        stock
                                    );
                                    return cartItem;
                                })}
                            cartTotalValue={cartTotalValue}
                        />
                    </div>
                </div>
            ) : (
                <NoProducts
                    title={"Such an empty..."}
                    subtitle={"No products added to your cart yet 😓"}
                    className={"mt-12"}
                />
            )}
        </AuthenticatedLayout>
    );
}
