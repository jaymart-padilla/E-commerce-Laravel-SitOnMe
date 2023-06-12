import React from "react";
import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    function getClassName(active) {
        return `btn ${active && "btn-active"}`;
    }

    return (
        <div className="flex btn-group justify-center md:justify-start md:mx-4">
            {links.length > 3 &&
                links.map(
                    (link, key) =>
                        key !== 0 &&
                        key !== links.length - 1 && (
                            <Link
                                preserveScroll
                                className={getClassName(link.active)}
                                href={link.url}
                                key={key}
                            >
                                {link.label}
                            </Link>
                        )
                )}
        </div>
    );
}
