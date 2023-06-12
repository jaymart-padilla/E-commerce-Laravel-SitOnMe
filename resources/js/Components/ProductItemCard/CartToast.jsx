import { Link } from "@inertiajs/react";

export default function CartToast({ quantity, className = "" }) {
    return (
        <div
            className={`alert shadow-lg z-10 max-w-xl mx-auto md:rounded-xl rounded-none fixed top-4 left-0 right-0 ${className}`}
        >
            <div>
                <i className="fa-solid fa-cart-shopping text-info me-1"></i>
                <div>
                    <h3 className="font-bold">Added to cart!</h3>
                    <div className="text-xs">{quantity} item(s)</div>
                </div>
            </div>
            <div className="flex-none">
                <Link href={route("cart")} className="btn btn-sm">
                    See
                </Link>
            </div>
        </div>
    );
}
