import { useState } from "react";
import { useForm } from "@inertiajs/react";
import NoProducts from "@/Components/404/NoProducts";
import Pagination from "@/Components/Pagination/Pagination";
import SectionTitle from "@/Components/Texts/SectionTitle";
import ProductItemCard from "@/Components/ProductItemCard/ProductItemCard";

export default function NewArrivals({ products, categories }) {
    const { data: productsList, links } = products;

    return (
        <section className="flex flex-col items-center pb-7 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
            <SectionTitle title="New" accentTitle="Arrivals" />
            <NewArrivalsCategory categories={categories} />
            {productsList.length !== 0 ? (
                <>
                    <div className="my-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        {/* products */}
                        {productsList.map((product) => {
                            return (
                                <ProductItemCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                    <Pagination links={links} />
                </>
            ) : (
                <NoProducts
                    title={"Such an empty..."}
                    subtitle={"Seems like there are no new products yet 😓"}
                    className={"mt-5"}
                />
            )}
        </section>
    );
}

function NewArrivalsCategory({ categories }) {
    const { get } = useForm();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // used for button state
    const categoryFilterId = new URLSearchParams(window.location.search).get(
        "category"
    );

    function handleSubmit(e) {
        e.preventDefault();
        const url = `${
            selectedCategory
                ? "/?category=" + encodeURIComponent(selectedCategory)
                : "/"
        }`;
        get(url, {
            preserveScroll: true,
        });
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="btn-group btn-group-vertical sm:btn-group-horizontal"
        >
            <button
                type="submit"
                className={`btn capitalize ${
                    !categoryFilterId && "btn-active"
                }`}
            >
                All
            </button>

            {/* categories btns */}
            {categories.map((category) => {
                const { id: categoryId, name: categoryName } = category;
                return (
                    <button
                        onClick={() => setSelectedCategory(categoryId)}
                        type="submit"
                        className={`btn capitalize ${
                            parseInt(categoryFilterId) === categoryId &&
                            "btn-active"
                        }`}
                        key={categoryId}
                        name="category"
                        value={categoryId}
                    >
                        {categoryName}
                    </button>
                );
            })}
        </form>
    );
}
