import AdminAuthenticatedLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import SearchBar from "./SearchBar";
import Table from "./Table";
import Pagination from "@/Components/Pagination/Pagination";
import NoProducts from "@/Components/404/NoProducts";

export default function Index({ auth, users, filters, pendingOrders }) {
    const { links } = users;

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex sm:flex-row flex-col justify-start sm:items-center gap-4">
                    <h2 className="me-auto font-semibold text-xl text-gray-200 leading-tight">
                        Users List
                    </h2>
                    <SearchBar filters={filters} />
                </div>
            }
            pendingOrders={pendingOrders}
        >
            <Head title="Manage Users" />

            {/* users */}
            {users.length !== 0 ? (
                <>
                    <Table users={users.data} />
                    <div className="flex justify-center mt-11">
                        <Pagination links={links} />
                    </div>
                </>
            ) : (
                <NoProducts
                    title={"Such an empty..."}
                    subtitle={"No users registered on your website just yet 🧐"}
                    className={"mt-5"}
                />
            )}
        </AdminAuthenticatedLayout>
    );
}
