import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

export default function Root() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
