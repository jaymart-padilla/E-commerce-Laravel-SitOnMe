import paths from "@/utils/paths";
import { Link } from "@inertiajs/react";
import Icon from "@/Components/Icons/Icon";

export default function Navbar({ className = "" }) {
    return (
        <nav className={`navbar px-2 sm:px-28 sm:pt-4 flex ${className}`}>
            <div className="flex-grow gap-4 text-white">
                <a
                    href={paths.home.url}
                    className="btn btn-ghost flex flex-row gap-2 justify-center items-center"
                >
                    <Icon width={48} height={48} />
                    <span className="normal-case text-2xl">SitOnMe</span>
                </a>
            </div>
            <div className="flex-none">
                <div className="indicator text-center">
                    <Link
                        href="/"
                        className="btn btn-ghost btn-lg capitalize hover:text-white"
                    >
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    );
}
