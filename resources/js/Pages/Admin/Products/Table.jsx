import InputError from "@/Components/InputError";
import { router, useForm } from "@inertiajs/react";

export default function Table({ products, categories }) {
    function handleDelete(id) {
        router.delete(route("products.destroy", id), {
            preserveState: true,
            preserveScroll: true,
        });
    }

    return (
        <div className="overflow-x-auto lg:px-14">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* product row */}
                    {products.map((product) => {
                        const { id, name, description, image, price, stock } =
                            product;
                        const inStock = stock > 0;

                        return (
                            <tr className="hover" key={id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={image} alt={name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-base font-bold text-slate-200">
                                                {name}
                                            </div>
                                            <div className="badge badge-ghost badge-xs opacity-50 w-40">
                                                <p className="truncate ...">
                                                    {description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {stock}{" "}
                                    <span className="font-bold">&#124;</span>{" "}
                                    {inStock ? (
                                        <span className="badge badge-success badge-sm">
                                            In stock
                                        </span>
                                    ) : (
                                        <span className="badge badge-error badge-sm">
                                            Out of stock
                                        </span>
                                    )}
                                </td>
                                <td>$ {price}</td>
                                <th>
                                    <EditProductModal
                                        product={product}
                                        categories={categories}
                                    />
                                    <DeleteModal
                                        handleDelete={handleDelete}
                                        name={name}
                                        id={id}
                                    />
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

function EditProductModal({ product, categories }) {
    const { id, name, description, image, category_id, price, stock } = product;
    const modalId = `editProductModal${id}`;

    const { data, setData, errors, processing, progress } = useForm({
        name,
        description,
        image,
        category_id,
        price,
        stock,
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(
            route("products.update", id),
            {
                _method: "patch",
                ...data,
            },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );

        window[modalId].close();
    };

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
                        Edit Product &#124; {name}
                    </h3>
                    <p className="pt-4 pb-2 text-base">Product Info:</p>
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

                        {/* description */}
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered mb-4"
                            placeholder={data.description}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                        ></textarea>
                        <InputError
                            className="mt-2"
                            message={description.name}
                        />

                        {/* image */}
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full mb-4"
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <InputError className="mt-2" message={image.name} />

                        {/* category */}
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            className="select mb-4"
                            defaultValue={data.category_id}
                            onChange={(e) =>
                                setData("category_id", e.target.value)
                            }
                        >
                            <option value={""} disabled>
                                Category
                            </option>
                            {categories.map((category) => (
                                <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <InputError
                            className="mt-2"
                            message={errors.category}
                        />

                        {/* stock */}
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder={data.stock}
                            value={data.stock}
                            onChange={(e) => setData("stock", e.target.value)}
                            className="input input-bordered w-full mb-4"
                        />

                        {/* price */}
                        <label className="label">
                            <span className="label-text">Price in ($)</span>
                        </label>
                        <input
                            type="number"
                            placeholder={data.price}
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                            className="input input-bordered w-full"
                        />
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

function DeleteModal({ id, handleDelete, name }) {
    const modalId = `deleteProductModal${id}`;

    return (
        <>
            <button
                className="btn btn-ghost btn-xs"
                onClick={() => window[modalId].showModal()}
            >
                Delete
            </button>
            <dialog id={modalId} className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-2xl">{name}</h3>
                    <p className="py-4 text-base">Delete this product?</p>
                    <div className="modal-action">
                        <button className="btn">Close</button>
                        <button
                            className="btn btn-primary"
                            onClick={() => handleDelete(id)}
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
