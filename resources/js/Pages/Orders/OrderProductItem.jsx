import CheckoutModal from "@/Components/Modal/CheckoutModal";
import { Link, router } from "@inertiajs/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function OrderProductItem({
    auth,
    products,
    quantity,
    status,
    className = "",
}) {
    const { id, name, image, description, price, stock } = products;

    function addToOrders() {
        router.post(
            "/orders",
            [
                {
                    quantity: 1,
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
                <div className="flex flex-wrap text-slate-200 border-b mt-4 mb-6 pb-5 border-slate-400">
                    <h4 className="me-auto text-lg font-semibold flex gap-2 justify-center items-center line-clamp-1">
                        <Link
                            href={route("show", id)}
                            className="flex gap-2 md:flex-row md:items-center flex-col items-start mb-2 md:mb-0"
                        >
                            {name} &times; {quantity}{" "}
                            <span
                                className={`badge ${
                                    status.toLowerCase() === "pending"
                                        ? "badge-warning"
                                        : "badge-success"
                                }`}
                            >
                                {status}
                            </span>
                        </Link>
                        <small className="ml-2 text-sm text-gray-600">
                            {dayjs(products.updated_at).fromNow()}
                        </small>
                    </h4>
                    <div className="text-lg font-semibold text-slate-400">
                        <sup className="me-2 text-xs text-slate-500 font-light">
                            {price} &times; {quantity}
                        </sup>
                        ${price * quantity}
                    </div>
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <CheckoutModal
                            auth={auth}
                            addToOrders={addToOrders}
                            productName={name}
                            productQuantity={1}
                            label="Buy again"
                            disabled={!stock}
                        />
                    </div>
                </div>
                <p className="text-sm line-clamp-1">{description}</p>
            </div>
        </div>
    );
}
