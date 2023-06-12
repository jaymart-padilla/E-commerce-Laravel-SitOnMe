import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";

export default function Table({ users }) {
    return (
        <div className="overflow-x-auto lg:px-14">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const { id, name, address, email } = user;

                        return (
                            <tr className="hover" key={id}>
                                <th>{name}</th>
                                <td>{address}</td>
                                <td>{email}</td>
                                <th>
                                    <EditUserModal user={user} />
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

function EditUserModal({ user }) {
    const { id, name, address, email } = user;
    const modalId = `editUserModal${id}`;

    const {
        data,
        setData,
        patch,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm({
        name,
        address,
        email,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(
            route("users.update", id),
            {
                ...data,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };

    if (recentlySuccessful) {
        window[modalId].close();
    }

    return (
        <>
            <button
                className="btn btn-ghost btn-xs"
                onClick={() => window[modalId].showModal()}
            >
                Edit
            </button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <button
                        htmlFor={modalId}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-2xl">
                        Edit User &#124; {name}
                    </h3>
                    <p className="pt-4 pb-2 text-base">User Info:</p>
                    <div className="form-control w-full flex justify-start">
                        {/* name */}
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder={data.name}
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            className="input input-bordered w-full mb-4"
                        />
                        <InputError className="mt-2" message={errors.name} />

                        {/* address */}
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder={data.address}
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            className="input input-bordered w-full mb-4"
                        />
                        <InputError className="mt-2" message={errors.address} />

                        {/* email */}
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder={data.email}
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="input input-bordered w-full mb-4"
                        />
                        <InputError className="mt-2" message={errors.email} />
                    </div>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                        <button
                            className="btn btn-primary"
                            disabled={processing}
                            onClick={submit}
                        >
                            Update
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
