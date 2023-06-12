import SearchInput from "@/Components/Form/SearchInput";
import Icon from "@/Components/Icons/Icon";
import paths from "@/utils/paths";
import navLinks from "./nav-links";
import { Link } from "@inertiajs/react";

export default function Navbar({
    auth,
    cartItemCount,
    cartTotalValue,
    searchValue = "",
    className = "",
}) {
    return (
        <nav
            className={`navbar px-2 sm:px-11 flex flex-col md:flex-row ${className}`}
        >
            <div className="flex-grow gap-4 text-white">
                <a
                    href={paths.home.url}
                    className="btn btn-ghost flex flex-row gap-2 justify-center items-center"
                >
                    <Icon width={34} height={34} />
                    <span className="normal-case text-xl">SitOnMe</span>
                </a>
                <SearchInput
                    formActionLink={paths.shop.url}
                    searchValue={searchValue}
                />
            </div>
            <div className="flex-none">
                {/* nav links */}
                {navLinks.length && (
                    <div>
                        {navLinks.map((navLink) => {
                            const isActiveRoute = route().current(
                                navLink.routeName
                            );
                            return (
                                <div
                                    className="indicator text-center"
                                    key={navLink.url}
                                >
                                    {isActiveRoute && (
                                        <span className="indicator-item indicator-bottom indicator-center badge badge-primary h-1 w-11"></span>
                                    )}
                                    <a
                                        href={navLink.url}
                                        className={`btn btn-ghost capitalize hover:text-white ${
                                            isActiveRoute && "text-white"
                                        }`}
                                    >
                                        {navLink.text}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}

                {auth != null && auth.user ? (
                    <>
                        {/* cart dropdown */}
                        <div className="dropdown dropdown-end z-50">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle"
                            >
                                <div className="indicator">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    <span className="badge badge-primary badge-sm indicator-item">
                                        {cartItemCount}
                                    </span>
                                </div>
                            </label>
                            <div
                                tabIndex={0}
                                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
                            >
                                <div className="card-body">
                                    <span className="font-bold text-lg">
                                        {cartItemCount} Item(s)
                                    </span>
                                    <span className="text-info">
                                        Subtotal: $
                                        {`${cartTotalValue.toFixed(2)}`}
                                    </span>
                                    <div className="card-actions">
                                        <Link
                                            href={route("cart")}
                                            className="btn btn-primary btn-block"
                                        >
                                            View cart
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* avatar dropdown*/}
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="avatar placeholder">
                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                        {/* get user name initials */}
                                        <span>
                                            {auth.user.name
                                                .split(" ")
                                                .map((s) => s.charAt(0))
                                                .join("")}
                                        </span>
                                    </div>
                                </div>
                            </label>
                            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
                                <li>
                                    <Link href={route("profile.edit")}>
                                        Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("cart")}>Cart</Link>
                                </li>
                                <li>
                                    <Link href={route("orders")}>Orders</Link>
                                </li>
                                <li>
                                    <Link method="post" href={route("logout")}>
                                        Log Out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </nav>
    );
}
