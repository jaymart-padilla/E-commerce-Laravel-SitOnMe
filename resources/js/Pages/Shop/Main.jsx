import NoProducts from "@/Components/404/NoProducts";
import Pagination from "@/Components/Pagination/Pagination";
import ProductItemCard from "@/Components/ProductItemCard/ProductItemCard";
import { router } from "@inertiajs/react";
import { useState } from "react";

// NOTE: default filtering func = takes off the certain property for the filters object
//       const defaultFilter = (({ sort, ...o }) => o)(filters); || removes sort property from the filters obj

export default function Main({
    auth,
    products,
    productsTotalCount,
    resultsTotalCount,
    links,
    categories,
    filters,
    className = "",
}) {
    const [priceRange, setPriceRange] = useState({
        minPrice: "",
        maxPrice: "",
    });

    function handleFilterChange(filters) {
        router.get(
            "/products",
            {
                ...filters,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    }

    return (
        <div
            className={`grid md:grid-cols-11 py-4 gap-6 items-start ${className}`}
        >
            {/* sidebar */}
            <div className="md:col-span-2 px-4 pb-6 overflow-hidden">
                <div className="divide-y divide-info space-y-5 text-slate-100">
                    {/* Categories */}
                    <form>
                        <h3 className="text-xl mb-4 uppercase font-medium">
                            Categories
                        </h3>
                        <div className="flex items-center my-3">
                            <input
                                type="radio"
                                name="category-filter"
                                id="all"
                                className="w-5 h-5 text-info focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                                checked={!filters.category}
                                onChange={() => {
                                    const defaultFilter = (({
                                        category,
                                        ...o
                                    }) => o)(filters);

                                    handleFilterChange(defaultFilter);
                                }}
                            />
                            <label
                                htmlFor="all"
                                className="ml-2 text-sm font-medium text-gray-300 capitalize"
                            >
                                All
                            </label>
                            <div className="ml-auto text-gray-600 text-sm">
                                ({productsTotalCount})
                            </div>
                        </div>
                        {categories.length !== 0 &&
                            categories.map((category) => {
                                return (
                                    <div
                                        className="flex items-center my-3"
                                        key={category.id}
                                    >
                                        <input
                                            type="radio"
                                            name="category-filter"
                                            id={category.id}
                                            value={category.id}
                                            className="w-5 h-5 text-info focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                                            checked={
                                                Number(filters.category) ===
                                                category.id
                                            }
                                            onChange={() => {
                                                handleFilterChange({
                                                    ...filters,
                                                    category: category.id,
                                                });
                                            }}
                                        />
                                        <label
                                            htmlFor={category.id}
                                            className="ml-2 text-sm font-medium text-gray-300 capitalize"
                                        >
                                            {category.name}
                                        </label>
                                        <div className="ml-auto text-gray-600 text-sm">
                                            ({category.products_count})
                                        </div>
                                    </div>
                                );
                            })}
                    </form>

                    {/* Price */}
                    <div className="pt-4 text-slate-100">
                        <h3 className="text-xl mb-3 uppercase font-medium">
                            Price
                        </h3>
                        <div className="mt-4 flex items-center">
                            <input
                                type="number"
                                name="min"
                                id="min"
                                min={0}
                                value={
                                    priceRange.minPrice ||
                                    filters.min ||
                                    priceRange.minPrice
                                }
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min"
                                onChange={(e) => {
                                    setPriceRange({
                                        ...priceRange,
                                        minPrice: e.target.value,
                                    });

                                    const defaultFilter = (({ min, ...o }) =>
                                        o)(filters);

                                    handleFilterChange(
                                        e.target.value
                                            ? {
                                                  ...filters,
                                                  min: e.target.value,
                                              }
                                            : defaultFilter
                                    );
                                }}
                            />
                            <span className="mx-3 text-gray-500">-</span>
                            <input
                                type="number"
                                name="max"
                                id="max"
                                min={0}
                                value={
                                    priceRange.maxPrice ||
                                    filters.max ||
                                    priceRange.maxPrice
                                }
                                className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max"
                                onChange={(e) => {
                                    setPriceRange({
                                        ...priceRange,
                                        maxPrice: e.target.value,
                                    });

                                    const defaultFilter = (({ max, ...o }) =>
                                        o)(filters);

                                    handleFilterChange(
                                        e.target.value
                                            ? {
                                                  ...filters,
                                                  max: e.target.value,
                                              }
                                            : defaultFilter
                                    );
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* products */}
            <div className="md:col-span-9 md:p-0 px-7 py-4">
                {/* sorting */}
                <div className="flex items-center mb-4 lg:pe-7">
                    <select
                        name="sort"
                        id="sort"
                        className="select w-fit max-w-xs"
                        defaultValue={filters.sort}
                        onChange={(e) => {
                            const defaultFilter = (({ sort, ...o }) => o)(
                                filters
                            );

                            handleFilterChange(
                                e.target.value !== "relevance"
                                    ? {
                                          ...filters,
                                          sort: e.target.value,
                                      }
                                    : defaultFilter
                            );
                        }}
                    >
                        <option value="relevance">Relevance</option>
                        <option value="latest">Latest</option>
                    </select>

                    <div className="flex gap-2 ml-auto">
                        {resultsTotalCount} results
                    </div>
                </div>

                {/* products */}
                {products.length !== 0 ? (
                    <>
                        <div className="grid md:grid-cols-2 gap-y-4 justify-center overflow-hidden mb-7">
                            {products.map((product) => {
                                return (
                                    <ProductItemCard
                                        auth={auth}
                                        key={product.id}
                                        product={product}
                                        className="card-compact"
                                    />
                                );
                            })}
                        </div>
                        <Pagination links={links} />
                    </>
                ) : (
                    <NoProducts
                        title={"Such an empty..."}
                        subtitle={"No items matched 😓"}
                        className={"mt-5"}
                    />
                )}
            </div>
        </div>
    );
}
