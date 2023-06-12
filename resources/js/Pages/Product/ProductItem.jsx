import { useState } from "react";
import CheckoutModal from "@/Components/Modal/CheckoutModal";
import Stepper from "@/Components/ProductItemCard/Stepper";
import { router } from "@inertiajs/react";

export default function ProductItem({ auth, product }) {
    const [quantity, setQuantity] = useState(1);
    const { name, description, price, id, image, stock } = product;

    function addToCart() {
        router.post(
            "/cart",
            {
                quantity,
                product_id: id,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    }

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
        <div className="grid grid-cols-1 md:grid-cols-7 gap-11 justify-center items-center p-16">
            <div className="col-span-3">
                <img
                    src={image}
                    className="object-cover rounded-lg shadow-2xl"
                />
            </div>
            <div className="col-span-4 flex flex-col gap-4">
                <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary">
                    The SitOnMe Company
                </p>
                <h2 className="text-5xl font-bold text-slate-200">{name}</h2>
                <p
                    className={`flex-none text-sm font-medium mt-2 ${
                        !!stock ? "text-green-400" : "text-red-400"
                    }`}
                >
                    {!!stock ? `In stock |  (${stock})` : "Out of stock"}
                </p>
                <p className="pt-5">{description}</p>
                <p className="py-4 text-2xl font-bold text-slate-200">
                    $ {price}
                </p>
                <div className="card-actions justify-between items-center">
                    <Stepper
                        quantity={quantity}
                        setQuantity={setQuantity}
                        stock={stock}
                        className="md:me-7"
                    />
                    {auth.user != null && (
                        <div>
                            <CheckoutModal
                                auth={auth}
                                addToOrders={addToOrders}
                                productName={name}
                                productQuantity={quantity}
                                disabled={!stock}
                            />
                        </div>
                    )}
                    <div className="grow">
                        <button
                            onClick={addToCart}
                            className="btn btn-primary w-full"
                            disabled={!stock}
                        >
                            <i className="fa-solid fa-cart-shopping me-2 mb-.5"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
