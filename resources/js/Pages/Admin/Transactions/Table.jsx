import { router } from "@inertiajs/react";

export default function Table({ transactions }) {
    function handleStatusChange(id, status) {
        router.patch(
            route("transactions.update", id),
            {
                status,
            },
            {
                preserveState: true,
                preserveScroll: true,
            }
        );
    }

    return (
        <div className="overflow-x-auto lg:px-14">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Payment Method</th>
                    </tr>
                </thead>
                <tbody>
                    {/* order placed */}
                    {transactions.map((transaction) => {
                        const {
                            id,
                            payment,
                            products,
                            total_price,
                            quantity,
                            status,
                            user,
                            created_at,
                        } = transaction;
                        if (payment) {
                            return (
                                <tr className="hover" key={id}>
                                    <th className="font-bold">
                                        {user.name}
                                        <div className="text-sm opacity-50">
                                            Placed:{" "}
                                            {new Date(
                                                created_at
                                            ).toLocaleString("en-US", {
                                                hour12: false,
                                            })}
                                        </div>
                                    </th>
                                    <td className="whitespace-pre-line break-all">
                                        {user.address}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={products.image}
                                                        alt={products.name}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {products.name}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    $ {products.price}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {quantity}{" "}
                                        <span className="font-bold">
                                            &#124;
                                        </span>{" "}
                                        <span className="badge badge-primary badge-sm">
                                            $ {total_price.toLocaleString()}
                                        </span>
                                    </td>
                                    <td>
                                        <select
                                            name="status"
                                            defaultValue={status}
                                            className={`select select-sm text-xs w-full max-w-xs ${
                                                status.toLowerCase() ===
                                                "pending"
                                                    ? "select-warning"
                                                    : "select-success"
                                            }`}
                                            onChange={(e) => {
                                                handleStatusChange(
                                                    id,
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option value={"pending"}>
                                                Pending
                                            </option>
                                            <option value={"accepted"}>
                                                Accepted
                                            </option>
                                        </select>
                                    </td>
                                    <th>
                                        <span
                                            className="tooltip tooltip-left"
                                            data-tip={
                                                payment.payment_method
                                                    .description
                                            }
                                        >
                                            {payment.payment_method.name}
                                        </span>
                                    </th>
                                </tr>
                            );
                        }
                    })}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Payment Method</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
