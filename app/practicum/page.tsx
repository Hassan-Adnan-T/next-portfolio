import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import Company from "../components/layout/company";
import VidResume from "../components/layout/vidResume";
import Documents from "../components/layout/documents";
import Gallery from "../components/layout/gallery";

export default function Practicum() {
    return (
        <main className="relative bg-white">
            <Navbar/>
            <Company/>
            <VidResume/>
            <Documents/>
            <Gallery/>
            <Footer/>
        </main>
    ); 
}