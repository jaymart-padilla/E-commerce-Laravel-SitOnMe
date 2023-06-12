import AdminAuthenticatedLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Main from "./Main";

export default function Index({
    auth,
    productCount,
    userCount,
    orderCount,
    pendingOrderCount,
    acceptedOrderCount,
    availableProductCount,
    outOfStockProductCount,
    pendingOrders,
}) {
    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
            pendingOrders={pendingOrders}
        >
            <Head title="Dashboard" />
            <Main
                productCount={productCount}
                userCount={userCount}
                orderCount={orderCount}
                pendingOrderCount={pendingOrderCount}
                acceptedOrderCount={acceptedOrderCount}
                availableProductCount={availableProductCount}
                outOfStockProductCount={outOfStockProductCount}
            />
        </AdminAuthenticatedLayout>
    );
}
