const ICON = {
    src: "/images/icon.svg",
    alt: "logo",
};

export default function Icon({ width, height, className = "" }) {
    return (
        <img
            className={className}
            width={width}
            height={height}
            src={ICON.src}
            alt={ICON.alt}
        />
    );
}
