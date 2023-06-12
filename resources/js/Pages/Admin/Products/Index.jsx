import AdminAuthenticatedLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import Table from "./Table";
import AddProductModal from "./AddProductModal";
import SearchBar from "./SearchBar";
import Pagination from "@/Components/Pagination/Pagination";
import NoProducts from "@/Components/404/NoProducts";

export default function Index({
    auth,
    products,
    categories,
    filters,
    pendingOrders,
}) {
    const { links } = products;

    return (
        <AdminAuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex sm:flex-row flex-col justify-start sm:items-center gap-4">
                    <h2 className="me-auto font-semibold text-xl text-gray-200 leading-tight">
                        Products List
                    </h2>
                    <SearchBar filters={filters} />
                    <AddProductModal categories={categories} />
                </div>
            }
            pendingOrders={pendingOrders}
        >
            <Head title="Manage Products" />

            {/* products */}
            {products.length !== 0 ? (
                <>
                    <Table products={products.data} categories={categories} />
                    <div className="flex justify-center mt-11">
                        <Pagination links={links} />
                    </div>
                </>
            ) : (
                <NoProducts
                    title={"Such an empty..."}
                    subtitle={"No products on your store just yet 🧐"}
                    className={"mt-5"}
                />
            )}
        </AdminAuthenticatedLayout>
    );
}
