import InputError from "@/Components/InputError";
import { router, useForm } from "@inertiajs/react";

export default function AddProductModal({
    categories,
    label = "Add Product",
    className = "",
}) {
    const {
        data,
        setData,
        post,
        errors,
        processing,
        progress,
        recentlySuccessful,
    } = useForm({
        name: "",
        description: "",
        image: "",
        category_id: "",
        price: "",
        stock: "",
    });

    const modalId = "add_product_modal";

    const submit = (e) => {
        e.preventDefault();

        post(
            route("products.store"),
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
            {/* Open the modal using ID.showModal() method */}
            <button
                className={`btn btn-sm btn-primary ${className}`}
                onClick={() => window[modalId].showModal()}
            >
                Add Product
            </button>
            <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <button
                        htmlFor={modalId}
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-2xl">Add a new product</h3>
                    <p className="pt-4 pb-2 text-base">Product info:</p>
                    <div className="form-control w-full flex justify-start">
                        {/* name */}
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
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
                            placeholder="Description"
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            className="textarea textarea-bordered mb-4"
                        ></textarea>
                        <InputError
                            className="mt-2"
                            message={errors.description}
                        />

                        {/* image */}
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full mb-4"
                            // value={data.image}
                            onChange={(e) =>
                                setData("image", e.target.files[0])
                            }
                        />
                        {progress && (
                            <progress value={progress.percentage} max="100">
                                {progress.percentage}%
                            </progress>
                        )}
                        <InputError className="mt-2" message={errors.image} />

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
                            message={errors.category_id}
                        />

                        {/* stock */}
                        <label className="label">
                            <span className="label-text">Stock</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Stock"
                            value={data.stock}
                            onChange={(e) => setData("stock", e.target.value)}
                            className="input input-bordered w-full mb-4"
                        />
                        <InputError className="mt-2" message={errors.stock} />

                        {/* price */}
                        <label className="label">
                            <span className="label-text">Price in ($)</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                            className="input input-bordered w-full"
                        />
                        <InputError className="mt-2" message={errors.price} />
                    </div>
                    <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Cancel</button>
                        <button
                            className="btn btn-primary"
                            disabled={processing}
                            onClick={submit}
                        >
                            {label}
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    );
}
