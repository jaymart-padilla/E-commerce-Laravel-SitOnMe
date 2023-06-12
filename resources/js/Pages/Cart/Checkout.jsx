import { Link, router } from "@inertiajs/react";
import { useState } from "react";

export default function Checkout({ products, cartTotalValue }) {
    const [termsAgree, setTermsAgree] = useState(false);

    // don't change properties name | it's relative to the server
    const ordersPayload = products.map((product) => ({
        quantity: product.quantity,
        product_id: product.products.id,
    }));

    function addToOrders() {
        router.post("/orders", ordersPayload, {
            preserveScroll: true,
            preserveState: true,
        });
    }

    return (
        <div className="shadow-sm text-slate-400">
            <h2 className="font-semibold text-xl text-slate-200 pb-4">
                Checkout
            </h2>
            <div className="p-4 border-t border-primary">
                {products.map((product) => {
                    const { id, products, quantity } = product;

                    return (
                        <div
                            className="grid grid-cols-9 py-3 text-start"
                            key={id}
                        >
                            <div className="col-span-3">
                                <h5 className="font-medium">{products.name}</h5>
                            </div>
                            <p className="col-span-3 mx-auto">
                                &times; {quantity}
                            </p>
                            <p className="font-medium col-span-3 ms-auto">
                                ${(quantity * products.price).toFixed(2)}
                            </p>
                        </div>
                    );
                })}
                <div className="flex justify-between font-medium py-3 uppercase">
                    <p className="font-semibold text-slate-50">Total</p>
                    <p className="text-info">
                        ${cartTotalValue.toFixed(2) || "00.00"}
                    </p>
                </div>
            </div>

            <div className="form-control">
                <label className="label cursor-pointer">
                    <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={termsAgree}
                        onChange={(e) => setTermsAgree(!termsAgree)}
                    />
                    <span className="label-text">
                        I agree to the{" "}
                        <Link href={route("about")} className="link-primary">
                            terms and conditions
                        </Link>
                    </span>
                </label>
                <button
                    className={`h-10 px-6 mt-1 font-semibold rounded-md ${
                        termsAgree
                            ? "bg-primary text-white"
                            : "border border-slate-400 text-slate-300"
                    }`}
                    type="submit"
                    disabled={!termsAgree}
                    onClick={addToOrders}
                >
                    Buy now
                </button>
            </div>
        </div>
    );
}
