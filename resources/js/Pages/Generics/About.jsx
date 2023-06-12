import Navbar from "./Navbar";
import { Link } from "@inertiajs/react";
import PageTitle from "./PageTitle";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 lg:px-0">
                <div className="divide-y divide-gray-700">
                    <div className="space-y-4 md:pt-6 pb-8 md:space-y-5">
                        <PageTitle title={"About us"} />
                        <p className="text-lg leading-7 text-gray-400">
                            <i className="text-slate-100 me-.5">
                                Welcome to{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                                    SitOnMe
                                </span>
                            </i>
                            , your ultimate destination for high-quality chairs
                            and comfortable seating solutions. We are passionate
                            about providing exceptional products that enhance
                            your sitting experience and bring style and comfort
                            to your space. <br />
                            <br />
                            At SitOnMe, we believe that a chair is not just a
                            piece of furniture but an essential element that
                            influences your well-being, productivity, and
                            overall comfort. With this philosophy in mind, we
                            curate a wide range of chairs that cater to
                            different needs, preferences, and design aesthetics.
                        </p>
                    </div>
                    <ul className="divide-y divide-gray-700">
                        <li className="py-12">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">
                                            Return Policy
                                        </dt>
                                        <dd className="text-base font-medium leading-6 text-gray-400">
                                            Learn about our policies
                                        </dd>
                                    </dl>
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link
                                                        href={route(
                                                            "return-policy"
                                                        )}
                                                        className="text-gray-100"
                                                    >
                                                        Return Policy
                                                    </Link>
                                                </h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                At SitOnMe, we want to ensure
                                                your complete satisfaction with
                                                your chair purchase. If for any
                                                reason you are not satisfied
                                                with your purchase, you may
                                                contact us within 30 days of
                                                delivery for a refund or
                                                exchange. 🪑
                                            </div>
                                        </div>
                                        <div className="text-base font-medium leading-6">
                                            <Link
                                                href={route("return-policy")}
                                                className="text-info hover:text-primary"
                                            >
                                                Read more &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-12">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">
                                            Terms and Conditions
                                        </dt>
                                        <dd className="text-base font-medium leading-6 text-gray-400">
                                            Browse also our T&C
                                        </dd>
                                    </dl>
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link
                                                        href={route(
                                                            "terms-and-conditions"
                                                        )}
                                                        className="text-gray-100"
                                                    >
                                                        Terms and Conditions
                                                    </Link>
                                                </h2>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                By using and accessing the
                                                SitOnMe website, you agree to
                                                the following terms and
                                                conditions:
                                            </div>
                                        </div>
                                        <div className="text-base font-medium leading-6">
                                            <Link
                                                href={route(
                                                    "terms-and-conditions"
                                                )}
                                                className="text-info hover:text-primary"
                                            >
                                                Read more &rarr;
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
