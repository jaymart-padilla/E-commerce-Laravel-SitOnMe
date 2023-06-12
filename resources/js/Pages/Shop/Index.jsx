import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs";
import Main from "./Main";

export default function Index({
    auth,
    categories,
    products,
    filters,
    productsTotalCount,
    resultsTotalCount,
    cartItemCount,
    cartTotalValue,
}) {
    const { data: productsList, links } = products;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                searchValue={filters.search || ""}
                auth={auth}
                cartItemCount={cartItemCount}
                cartTotalValue={cartTotalValue}
            />
            <Breadcrumbs className="px-7" />
            <div className="grow md:px-4">
                <Main
                    auth={auth}
                    products={productsList}
                    links={links}
                    categories={categories}
                    productsTotalCount={productsTotalCount}
                    resultsTotalCount={resultsTotalCount}
                    filters={filters}
                />
            </div>
            <Footer />
        </div>
    );
}
