import Icon from "@/Components/Icons/Icon";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div>
                <Link
                    href="/"
                    className="flex flex-col justify-center items-center gap-1"
                >
                    <Icon width={84} height={84} />
                    <h1 className="text-center text-2xl text-slate-100">
                        Sit
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r
                        from-purple-600 to-primary"
                        >
                            OnMe
                        </span>
                    </h1>
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
