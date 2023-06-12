import paths from "@/utils/paths";

const navLinks = [
    { url: paths.home.url, text: paths.home.text, routeName: "home" },
    { url: paths.about.url, text: paths.about.text, routeName: "about" },
    { url: paths.shop.url, text: paths.shop.text, routeName: "shop" },
    { url: paths.contact.url, text: paths.contact.text, routeName: "contact" },
];

export default navLinks;
