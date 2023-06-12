import Navbar from "./Navbar";
import PageTitle from "./PageTitle";

export default function TermsAndConditions() {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 lg:px-0">
                <div className="divide-y divide-gray-700">
                    <div className="space-y-4 md:pt-6 pb-8 md:space-y-5">
                        <PageTitle title={"Terms And Conditions"} />
                        <p className="text-lg leading-7 text-gray-400">
                            At
                            <i className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                                SitOnMe
                            </i>
                            , we strive to provide you with a delightful
                            shopping experience while ensuring transparency and
                            fairness in our operations. Our{" "}
                            <span className="text-slate-100">
                                Terms and Conditions
                            </span>{" "}
                            outline the guidelines and expectations for both
                            parties involved - you as the valued customer and us
                            as the trusted provider of quality chairs.
                        </p>
                    </div>
                    <ul>
                        <li className="pt-12 py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Acceptance of Terms
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                By accessing and using our
                                                website, you acknowledge that
                                                you have read, understood, and
                                                agreed to abide by our Terms and
                                                Conditions. These terms govern
                                                your use of our website and any
                                                transactions or interactions
                                                with SitOnMe.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Intellectual Property
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                All content, materials, and
                                                intellectual property rights on
                                                our website are the sole
                                                property of SitOnMe unless
                                                otherwise stated. These include
                                                but are not limited to logos,
                                                images, product descriptions,
                                                and website design. Any
                                                unauthorized use or reproduction
                                                of our intellectual property is
                                                strictly prohibited.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Product Information
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                We strive to provide accurate
                                                and up-to-date information about
                                                our chairs, including
                                                descriptions, images,
                                                specifications, and pricing.
                                                However, we cannot guarantee the
                                                absence of errors or omissions.
                                                We reserve the right to correct
                                                any inaccuracies and update
                                                information as needed.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Pricing and Payments
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                Our product prices are displayed
                                                in the currency specified on our
                                                website and are subject to
                                                change without prior notice. We
                                                accept various payment methods,
                                                and all transactions are
                                                securely processed. Please
                                                review our Payment Policy for
                                                more details on accepted payment
                                                methods, currency conversions,
                                                and refund processes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Order Placement and
                                                    Confirmation
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                Placing an order with SitOnMe
                                                constitutes an offer to purchase
                                                our products. We reserve the
                                                right to accept or reject any
                                                order for various reasons,
                                                including but not limited to
                                                product availability, pricing
                                                errors, or suspected fraudulent
                                                activity. Upon order
                                                confirmation, you will receive
                                                an email or notification with
                                                details of your purchase.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Shipping and Delivery
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                We strive to process and ship
                                                orders in a timely manner,
                                                ensuring safe and reliable
                                                delivery of our chairs. Please
                                                review our Shipping Policy for
                                                information on shipping methods,
                                                estimated delivery times, and
                                                any applicable shipping fees or
                                                restrictions.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Privacy and Data Protection
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                Protecting your privacy and
                                                safeguarding your personal
                                                information is of utmost
                                                importance to us. We handle your
                                                data in accordance with our
                                                Privacy Policy, which outlines
                                                the types of information we
                                                collect, how we use it, and the
                                                security measures we have in
                                                place.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                        <li className="py-6">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-gray-100 text-2xl font-bold leading-8 tracking-tight">
                                                    Customer Support and
                                                    Feedback
                                                </p>
                                            </div>
                                            <div className="prose max-w-none text-gray-400">
                                                We value your satisfaction and
                                                are committed to providing
                                                exceptional customer support. If
                                                you have any questions,
                                                concerns, or feedback, please
                                                reach out to our customer
                                                support team. We appreciate your
                                                input as it helps us improve our
                                                products and services.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    </ul>
                    <div className="space-y-4 md:pt-6 pb-8 md:space-y-5">
                        <p className="text-lg leading-7 text-gray-400">
                            Please note that our Terms and Conditions may be
                            subject to updates or modifications. It is your
                            responsibility to review these terms periodically to
                            stay informed of any changes. By continuing to use
                            our website or engage in transactions with SitOnMe,
                            you indicate your acceptance of the updated terms.
                        </p>
                        <p className="text-lg leading-7 text-gray-400">
                            For a comprehensive understanding of our Terms and
                            Conditions, including any additional clauses or
                            provisions, please refer to the full Terms and
                            Conditions page on our website.
                        </p>
                        <p className="text-lg leading-7 text-slate-100">
                            We thank you for choosing{" "}
                            <i className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                                SitOnMe
                            </i>{" "}
                            as your trusted source for quality chairs. By
                            adhering to our Terms and Conditions, we aim to
                            create a mutually beneficial and enjoyable shopping
                            experience for all.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
