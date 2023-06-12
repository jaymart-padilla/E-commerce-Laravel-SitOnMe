import paths from "@/utils/paths";

export default function Breadcrumbs({ className = "" }) {
    const COLOR = "text-info";
    return (
        <nav
            className={`flex py-1 border-y border-info bg-gray-950 ${className}`}
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <a
                        href={paths.home.url}
                        className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white"
                    >
                        <i className={`fa-solid fa-house mr-2 ${COLOR}`}></i>
                        {paths.home.text}
                    </a>
                </li>
                <li aria-current="page">
                    <div className="flex items-center">
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="ml-1 text-sm font-medium md:ml-2 text-gray-400 capitalize">
                            <i className={`fa-solid fa-shop mr-2 ${COLOR}`}></i>
                            Shop
                        </span>
                    </div>
                </li>
            </ol>
        </nav>
    );
}
