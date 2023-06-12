import Icon from "@/Components/Icons/Icon";
import footerLinks from "./footer-links";
import socialLinks from "@/utils/social-links";
import SocialIcon from "@/Components/Icons/SocialIcon";

// TODO: create the admin pages

export default function Footer() {
    return (
        <footer id="footer" className="footer p-10 bg-gray-950">
            <div>
                <Icon width={90} height={90} />
                <p>
                    SitOnMe Industries Ltd.
                    <br />
                    Providing reliable chair since 1969
                </p>
            </div>

            {/* footer links */}
            {footerLinks.map((category) => {
                return (
                    <div key={category.category}>
                        <span className="footer-title">
                            {category.category}
                        </span>
                        {category.links.map((link) => (
                            <a
                                key={link.text}
                                href={link.url}
                                className="link link-hover"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                );
            })}

            <div>
                <span className="footer-title">Contacts</span>
                <p className="grid grid-flow-col justify-content items-center gap-2">
                    <i className="fa-solid fa-location-dot text-slate-500 justify-self-start"></i>
                    <span>107, Sit Street, Bolaney, Alaminos City, Ph</span>
                </p>
                <p className="grid grid-flow-col justify-content items-center gap-2">
                    <i className="fa-solid fa-address-book text-slate-500 justify-self-start"></i>
                    <span>+63 0123456789</span>
                </p>
                <p className="grid grid-flow-col justify-content items-center gap-2">
                    <i className="fa-solid fa-envelope text-slate-500 justify-self-start"></i>
                    <span>SitOnMe@gmail.com</span>
                </p>
            </div>

            {/* social links */}
            {socialLinks.length && (
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        {socialLinks.map((socialLink) => {
                            const { category, icon, link } = socialLink;
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
            )}
        </footer>
    );
}
