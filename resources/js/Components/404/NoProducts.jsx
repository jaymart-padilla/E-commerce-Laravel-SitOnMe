export default function NoProducts({ title, subtitle, className = "" }) {
    return (
        <div
            className={`flex flex-col justify-center items-center ${className}`}
        >
            <img
                className="object-cover md:w-1/3 sm:1/2"
                src={`/images/cat.svg`}
            />
            <p className="text-2xl py-2">{title}</p>
            <p className="lg:text-xs sm:text-sm">{subtitle}</p>
        </div>
    );
}
