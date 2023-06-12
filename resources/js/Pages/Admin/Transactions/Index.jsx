import AdminAuthenticatedLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Pagination from "@/Components/Pagination/Pagination";
import NoProducts from "@/Components/404/NoProducts";
import Filter from "./Filter";

export default function Index({ auth, transactions, filters, pendingOrders }) {
    const { links } = transactions;
    console.log(transactions);

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex sm:flex-row flex-col justify-start sm:items-center gap-4">
                    <h2 className="me-auto font-semibold text-xl text-gray-200 leading-tight">
                        Manage Orders
                    </h2>
                    <Filter filters={filters} />
                    <SearchBar filters={filters} />
                </div>
            }
            pendingOrders={pendingOrders}
        >
            <Head title="Manage Orders" />
            {/* users */}
            {transactions.length !== 0 ? (
                <>
                    <Table transactions={transactions.data} />
                    <div className="flex justify-center mt-11">
                        <Pagination links={links} />
                    </div>
                </>
            ) : (
                <NoProducts
                    title={"Such an empty..."}
                    subtitle={"No orders has been placed just yet 🧐"}
                    className={"mt-5"}
                />
            )}
        </AdminAuthenticatedLayout>
    );
}
