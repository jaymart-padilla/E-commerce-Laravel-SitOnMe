import CheckoutModal from "@/Components/Modal/CheckoutModal";
import Stepper from "@/Components/ProductItemCard/Stepper";
import { router } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function CartProductItem({
    auth,
    products,
    quantity: productQuantity,
    className = "",
}) {
    const [quantity, setQuantity] = useState(productQuantity);
    const { id, name, image, description, price, stock } = products;

    function removeItemFromCart() {
        router.delete(`/cart/${id}`, {
            preserveScroll: true,
            preserveState: true,
        });
    }

    useEffect(() => {
        // if quantity stepper change -> update cartItem quantity
        if (productQuantity !== quantity) {
            router.patch(
                "/cart",
                {
                    id,
                    quantity,
                },
                {
                    preserveScroll: true,
                    preserveState: true,
                }
            );
        }
    }, [quantity]);

    function addToOrders() {
        router.post(
            "/orders",
            [
                {
                    quantity,
                    product_id: id,
                },
            ],
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    }

    return (
        <div className={`flex font-sans ${className}`}>
            <div className="flex-none w-48 relative">
                <img
                    src={image}
                    alt={name}
                    className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
                    loading="lazy"
                />
            </div>
            {/* product actions */}
            <div className="flex-auto p-6">
                <div className="flex flex-wrap text-slate-200">
                    <a
                        href={route("show", id)}
                        className="me-auto text-lg font-semibold"
                    >
                        {name}
                    </a>
                    <div className="text-lg font-semibold text-slate-400">
                        ${price}
                    </div>
                    <div
                        className={`w-full flex-none text-sm font-medium mt-2 ${
                            !!stock ? "text-green-400" : "text-red-400"
                        }`}
                    >
                        {!!stock ? `In stock |  (${stock})` : "Out of stock"}
                    </div>
                </div>
                <Stepper
                    className="mt-4 mb-6 pb-5 border-b border-slate-400"
                    quantity={quantity}
                    setQuantity={setQuantity}
                    stock={stock}
                />
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <CheckoutModal
                            auth={auth}
                            addToOrders={addToOrders}
                            productName={name}
                            productQuantity={quantity}
                            disabled={!stock}
                            className="capitalize"
                        />
                        <button
                            className="btn btn-outline capitalize"
                            type="button"
                            onClick={removeItemFromCart}
                        >
                            Remove from cart
                        </button>
                    </div>
                </div>
                <p className="text-sm line-clamp-1">{description}</p>
            </div>
        </div>
    );
}
