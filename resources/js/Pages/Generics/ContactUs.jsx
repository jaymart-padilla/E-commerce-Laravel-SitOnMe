import Navbar from "./Navbar";
import { Link } from "@inertiajs/react";
import PageTitle from "./PageTitle";
import Icon from "@/Components/Icons/Icon";
import socialLinks from "@/utils/social-links";
import SocialIcon from "@/Components/Icons/SocialIcon";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 lg:px-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                        <PageTitle title={"Get in Touch"} />
                    </div>
                    <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                        <div className="flex flex-col items-center pt-8">
                            <Icon width={192} height={192} />
                            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                                Sit
                                <span
                                    className="text-transparent bg-clip-text bg-gradient-to-r
                        from-purple-600 to-primary"
                                >
                                    OnMe
                                </span>
                            </h3>
                            <q className="text-gray-500 dark:text-gray-400">
                                Your tiredness is our comfort
                            </q>
                            <div className="text-gray-500 dark:text-gray-400">
                                The SitOnMe Company
                            </div>
                            <div className="flex space-x-3 pt-6">
                                {/* social links */}
                                {socialLinks.length &&
                                    socialLinks.map((socialLink) => {
                                        const { category, icon, link } =
                                            socialLink;
                                        return (
                                            <a href={link.url} key={category}>
                                                <SocialIcon
                                                    className={`${icon.fontAwesomeClass} fa-xl`}
                                                    color={icon.color.dark}
                                                />
                                            </a>
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="max-w-none pt-8 pb-8 prose-dark xl:col-span-2 flex flex-col gap-4">
                            <p>
                                We value your feedback and inquiries. If you
                                have any questions, suggestions, or concerns,
                                please don't hesitate to reach out to us. Our
                                team is here to assist you.
                            </p>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl text-slate-100 font-bold">
                                    Contacts:
                                </h3>
                                <div>
                                    <i className="fa-solid fa-location-dot mx-4 lg:ms-9 lg:me-4"></i>
                                    <span>
                                        107, Sit Street, Bolaney, Alaminos City,
                                        Ph
                                    </span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-address-book mx-4 lg:ms-9 lg:me-4"></i>
                                    <span>+63 0123456789</span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-fax mx-4 lg:ms-9 lg:me-4"></i>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-envelope mx-4 lg:ms-9 lg:me-4"></i>
                                    <span>SitOnMe@gmail.com</span>
                                </div>
                            </div>
                            <p>
                                We look forward to hearing from you and will
                                respond to your message as soon as possible.
                            </p>
                            <q className="text-slate-100 italic">
                                Thank you for your interest in contacting us!
                            </q>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
