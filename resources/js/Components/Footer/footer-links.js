import paths from "@/utils/paths";

const footerLinks = [
    {
        category: "Explore",
        links: [
            { url: paths.about.url, text: paths.about.text },
            { url: paths.contact.url, text: paths.contact.text },
            { url: paths.shop.url, text: paths.shop.text },
        ],
    },
    {
        category: "Legal",
        links: [
            { url: paths.returnPolicy.url, text: paths.returnPolicy.text },
            {
                url: paths.termsAndConditions.url,
                text: paths.termsAndConditions.text,
            },
        ],
    },
];

export default footerLinks;
