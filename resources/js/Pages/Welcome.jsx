import NewArrivals from "@/Pages/Home/NewArrival/NewArrivals";
import Footer from "@/Components/Footer/Footer";
import Hero from "@/Pages/Home/Hero/Hero";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";

export default function Welcome({
    auth,
    products,
    categories,
    cartItemCount,
    cartTotalValue,
}) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar
                className="lg:absolute"
                auth={auth}
                cartItemCount={cartItemCount}
                cartTotalValue={cartTotalValue}
            />
            <Hero />
            <NewArrivals products={products} categories={categories} />
            <Footer />
        </>
    );
}
