import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import Company from "../components/layout/company";
import VidResume from "../components/layout/vidResume";

export default function Practicum() {
    return (
        <main className="relative bg-white">
            <Navbar/>
            <Company/>
            <VidResume/>
            <Footer/>
        </main>
    ); 
}