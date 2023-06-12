import { useState } from "react";

export default function SearchInput({
    formActionLink = "#",
    placeholder = "Search",
    name = "search",
    withSubmitBtn = false,
    submitBtnText = "Search",
    searchValue = "",
}) {
    const [search, setSearch] = useState(searchValue);

    return (
        <form action={formActionLink}>
            <label
                htmlFor="default-search"
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
                    id="default-search"
                    name={name}
                    value={search}
                    className={`block w-full pl-10 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 focus:bg-gray-800 ${
                        withSubmitBtn && " p-4"
                    }`}
                    placeholder={placeholder}
                    autoComplete="off"
                    onChange={(e) => setSearch(e.target.value)}
                />

                {withSubmitBtn && (
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-primary hover:bg-gradient-to-r from-violet-600 to-primary focus:ring-blue-500"
                    >
                        {submitBtnText}
                    </button>
                )}
            </div>
        </form>
    );
}
