import NoProducts from "@/Components/404/NoProducts";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import OrderProductItem from "./OrderProductItem";

export default function Index({ auth, orderItems }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-200 leading-tight">
                    Orders
                </h2>
            }
        >
            <Head title="Orders" />
            <div className="flex flex-col gap-4 md:px-4 xl:px-0 lg:py-7 max-w-7xl mx-auto">
                {orderItems.length !== 0 ? (
                    orderItems.map((orderItem) => {
                        const {
                            id,
                            products,
                            quantity: orderItemQuantity,
                            status,
                        } = orderItem;
                        return (
                            <OrderProductItem
                                auth={auth}
                                products={products}
                                quantity={orderItemQuantity}
                                status={status}
                                key={id}
                                className="rounded-md"
                            />
                        );
                    })
                ) : (
                    <NoProducts
                        title={"Such an empty..."}
                        subtitle={"Maybe it's time to buy 🤑"}
                        className={"mt-12"}
                    />
                )}
            </div>
        </AuthenticatedLayout>
    );
}
