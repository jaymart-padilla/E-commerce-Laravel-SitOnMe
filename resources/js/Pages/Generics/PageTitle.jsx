export default function PageTitle({ title }) {
    return (
        <>
            <h1 className="text-6xl md:text-7xl capitalize text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-primary text-center md:text-start font-extrabold sm:leading-10 mt-4 md:mt-7">
                {title}
            </h1>
            <hr className="w-48 md:w-96 h-1 md:mx-0 mx-auto border-0 rounded my-7 bg-primary" />
        </>
    );
}
