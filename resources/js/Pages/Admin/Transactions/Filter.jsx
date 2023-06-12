import { router } from "@inertiajs/react";

export default function Filter({ filters }) {
    function handleFilterChange(filters) {
        router.get(
            route("transactions"),
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
        <select
            name="status"
            className="select select-bordered select-sm md:w-40 w-full text-xs max-w-xs"
            defaultValue={filters.status}
            onChange={(e) => {
                const defaultFilter = (({ status, ...o }) => o)(filters);

                handleFilterChange(
                    e.target.value
                        ? {
                              ...filters,
                              status: e.target.value,
                          }
                        : defaultFilter
                );
            }}
        >
            <option value={""}>All</option>
            <option value={"pending"}>Pending</option>
            <option value={"accepted"}>Accepted</option>
        </select>
    );
}
