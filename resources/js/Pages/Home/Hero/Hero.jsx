import SearchInput from "@/Components/Form/SearchInput";
import paths from "@/utils/paths";

export default function Hero() {
    return (
        <section className="hero min-h-screen md:px-8 xl:px-16 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black">
            <div className="hero-content flex-col gap-11 lg:flex-row lg:gap-0">
                <img
                    src="/images/undraw_reading_time_re_phf7.svg"
                    alt=""
                    className="block max-w-md lg:max-w-2xl md:max-w-xl"
                />
                <div>
                    <h1 className="text-white lg:text-6xl md:text-5xl text-4xl font-bold">
                        Sit
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-primary">
                            OnMe
                        </span>
                    </h1>
                    <p className="py-6">
                        <q className="italic block text-slate-200">
                            Your tiredness is our comfort
                        </q>
                        Unwind in comfort at{" "}
                        <span
                            className="text-transparent bg-clip-text bg-gradient-to-r
                        from-purple-600 to-primary"
                        >
                            SitOnMe
                        </span>
                        . Find your perfect chair, where tiredness fades away
                        and relaxation takes center stage.
                    </p>

                    <SearchInput
                        formActionLink={paths.shop.url}
                        placeholder={"See what chair you need"}
                        withSubmitBtn
                    />
                </div>
            </div>
        </section>
    );
}
