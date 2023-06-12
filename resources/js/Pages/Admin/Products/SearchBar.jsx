import { router } from "@inertiajs/react";
import { useState } from "react";

export default function SearchBar({
    placeholder = "Search",
    name = "search",
    filters,
}) {
    const [searchValue, setSearchValue] = useState("");

    // i made this function so that the search input would sync to the search handler
    // the moment i made changes in the search bar, it would send the current search input value (not the searchValue state) to this function without the need to re-render the screen to get the real time value
    function handleSearch(filters) {
        router.get(
            route("products"),
            {
                ...filters,
            },
            {
                preserveState: true,
                preserveScroll: true,
                replace: true,
            }
        );
    }

    return (
        <>
            <label
                htmlFor="product_search"
                className="text-sm font-medium sr-only text-white"
            >
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                </div>

                <input
                    type="search"
                    id="product_search"
                    name={name}
                    className={`block w-full pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-800`}
                    placeholder={placeholder}
                    autoComplete="off"
                    value={searchValue || filters.search || searchValue}
                    onChange={(e) => {
                        setSearchValue(e.target.value);

                        const defaultFilter = (({ search, ...o }) => o)(
                            filters
                        );

                        handleSearch(
                            e.target.value
                                ? {
                                      ...filters,
                                      search: e.target.value,
                                  }
                                : defaultFilter
                        );
                    }}
                />
            </div>
        </>
    );
}
