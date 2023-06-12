import { Link } from "@inertiajs/react";

export default function Main({
    productCount,
    userCount,
    orderCount,
    pendingOrderCount,
    acceptedOrderCount,
    availableProductCount,
    outOfStockProductCount,
}) {
    return (
        <div className="flex justify-center items-center">
            <div className="stats lg:stats-horizontal stats-vertical shadow w-full">
                <Link href={route("products")}>
                    <div className="stat">
                        <div className="stat-figure text-info">
                            <i className="fa-solid fa-cubes fa-2xl"></i>
                        </div>
                        <div className="stat-title text-slate-200">
                            Total Products
                        </div>
                        <div className="stat-value text-primary">
                            {productCount}
                        </div>
                        <div className="stat-desc">
                            <span className="text-info">
                                Available: {availableProductCount}
                            </span>{" "}
                            &#124;{" "}
                            <span className="text-error">
                                Out of Stock: {outOfStockProductCount}
                            </span>
                        </div>
                    </div>
                </Link>

                <Link href={route("users")}>
                    <div className="stat">
                        <div className="stat-figure text-info">
                            <i className="fa-solid fa-people-group fa-2xl"></i>
                        </div>
                        <div className="stat-title text-slate-200">
                            Registered Users
                        </div>
                        <div className="stat-value text-primary">
                            {userCount}
                        </div>
                    </div>
                </Link>

                <Link href={route("transactions")}>
                    <div className="stat">
                        <div className="stat-figure text-info">
                            <i className="fa-solid fa-cart-arrow-down fa-2xl"></i>
                        </div>
                        <div className="stat-title text-slate-200">
                            Total Orders
                        </div>
                        <div className="stat-value text-primary">
                            {orderCount}
                        </div>
                        <div className="stat-desc">
                            <span className="text-info">
                                Accepted: {acceptedOrderCount}
                            </span>{" "}
                            &#124;{" "}
                            <span className="text-warning">
                                Pending: {pendingOrderCount}
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
