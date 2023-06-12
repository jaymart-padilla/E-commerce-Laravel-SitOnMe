import { Link, router } from "@inertiajs/react";
import Stepper from "./Stepper";
import { useState } from "react";
import CartToast from "./CartToast";
import CheckoutModal from "../Modal/CheckoutModal";

export default function ProductItemCard({ auth, product, className = "" }) {
    const {
        id,
        name,
        image,
        description,
        price,
        stock,
        category: { name: categoryName },
    } = product;

    const [quantity, setQuantity] = useState(1);
    // const [cartToastVisible, setCartToastVisible] = useState(false);

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

        // setCartToastVisible(true);

        // setTimeout(() => {
        //     setCartToastVisible(false);
        // }, 2250);
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

    function redirectToProduct(productId) {
        location.href = `/products/${productId}`;
    }

    return (
        <>
            {/* {cartToastVisible && <CartToast quantity={quantity} />} */}
            <div
                className={`card xl:w-96 shadow-xl hover:bg-gradient-to-r from-purple-700 via-purple-800 to-purple-950 hover:text-white transition duration-200 ${className}`}
            >
                <figure
                    className="cursor-pointer"
                    onClick={() => redirectToProduct(id)}
                >
                    <img
                        className="object-cover h-48 w-full"
                        src={`${image}`}
                        alt=""
                    />
                </figure>
                <div className="card-body">
                    {/* first section */}
                    <h2 className="card-title text-slate-200">
                        {name}
                        {/* if out of stock */}
                        {!stock && (
                            <div className="badge badge-error text-black">
                                <i class="fa-solid fa-ban me-1"></i>
                                Out of stock
                            </div>
                        )}

                        {/* if new arrive */}
                        {false && (
                            <div className="badge badge-info text-gray-900">
                                <i class="fa-solid fa-truck-fast me-1"></i>
                                New arrive
                            </div>
                        )}
                    </h2>
                    <p className="py-2 line-clamp-3">{description}</p>
                    {/* second section */}
                    <div className="card-actions justify-between items-center">
                        <Stepper
                            quantity={quantity}
                            setQuantity={setQuantity}
                            stock={stock}
                        />

                        <button
                            type="button"
                            className="capitalize badge hover:badge-info hover:text-slate-100"
                        >
                            {categoryName}
                        </button>
                    </div>
                    {/* third section */}
                    <hr className="opacity-20 my-2" />
                    <div className="card-actions justify-between items-center">
                        <p>Price: ${price}</p>
                        <div>
                            {auth != null && auth.user && (
                                <CheckoutModal
                                    auth={auth}
                                    addToOrders={addToOrders}
                                    productName={name}
                                    productQuantity={quantity}
                                    disabled={!stock}
                                />
                            )}
                            <button
                                onClick={addToCart}
                                className="btn btn-primary ms-2"
                                disabled={!stock}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
