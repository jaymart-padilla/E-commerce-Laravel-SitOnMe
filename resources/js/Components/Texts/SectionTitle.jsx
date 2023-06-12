export default function SectionTitle({
    title,
    accentTitle = "",
    className = "",
}) {
    return (
        <>
            <h4 className="text-slate-100 text-4xl capitalize mt-7 text-center font-bold">
                {title}{" "}
                {accentTitle && (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary">
                        {accentTitle}
                    </span>
                )}
            </h4>
            <hr className="w-14 h-1 mx-auto border-0 rounded my-7 bg-primary" />
        </>
    );
}
