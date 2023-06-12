import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function CheckoutModal({
    auth,
    addToOrders,
    productName,
    productQuantity,
    disabled,
    label = "Buy now",
    className = "",
}) {
    const [termsAgree, setTermsAgree] = useState(false);
    const { name, address, email } = auth.user;

    return (
        <>
            {/* The button to open modal */}
            <label
                htmlFor={`${productName}${productQuantity}`}
                className={`btn btn-primary ${className}`}
                disabled={disabled}
            >
                {label}
            </label>

            <input
                type="checkbox"
                id={`${productName}${productQuantity}`}
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg flex justify-between">
                        <span>Buy this item now?</span>
                        <span>
                            {productName} &times; {productQuantity}
                        </span>
                    </h3>

                    <p className="pt-4 pb-2 text-base">Your info:</p>
                    {/* user info */}
                    <div className="form-control w-full flex justify-start">
                        {/* name */}
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder={name}
                            className="input input-bordered w-full"
                            disabled
                        />
                        {/* address */}
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder={address}
                            className="input input-bordered w-full"
                            disabled
                        />
                        {/* email */}
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder={email}
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer flex justify-end gap-4 mt-2">
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                checked={termsAgree}
                                onChange={(e) => setTermsAgree(!termsAgree)}
                            />
                            <span className="label-text">
                                I agree to the{" "}
                                <Link
                                    href={route("about")}
                                    className="link-primary"
                                >
                                    terms and conditions
                                </Link>
                            </span>
                        </label>
                    </div>
                    <div className="modal-action">
                        <button
                            onClick={addToOrders}
                            className={`btn ${
                                termsAgree && !disabled
                                    ? "btn-primary"
                                    : "btn-disabled"
                            }`}
                            type="submit"
                            disabled={!termsAgree && disabled}
                        >
                            Confirm
                        </button>
                        <label
                            htmlFor={`${productName}${productQuantity}`}
                            className="btn"
                        >
                            Maybe not
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
