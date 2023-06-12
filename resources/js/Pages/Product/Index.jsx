import Navbar from "@/Components/Navbar/Navbar";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "@/Components/Footer/Footer";
import NoProducts from "@/Components/404/NoProducts";
import ProductItem from "./ProductItem";

export default function Index({
    auth,
    product,
    cartItemCount,
    cartTotalValue,
}) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
                auth={auth}
                cartItemCount={cartItemCount}
                cartTotalValue={cartTotalValue}
            />
            <Breadcrumbs
                label={product ? product.name : "Product not found"}
                className="px-7"
            />

            {product ? (
                <ProductItem auth={auth} product={product} />
            ) : (
                <div className="grow">
                    <NoProducts
                        title={"Such an empty..."}
                        subtitle={"Product not found :("}
                        className={"mt-12"}
                    />
                </div>
            )}
            <Footer />
        </div>
    );
}
