import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import Company from "../components/layout/company";
import VidResume from "../components/layout/vidResume";
import Documents from "../components/layout/documents";
import Gallery from "../components/layout/gallery";
import Tracking from "../components/layout/tracking";

export default function Practicum() {
    return (
        <main className="relative bg-white">
            <Navbar/>
            <Company/>
            <VidResume/>
            <Documents/>
            <Tracking/>
            <Gallery/>
            <VidResume
            title="SHORT VIDEO"
            description="an evaluation of my performance during the practicum. It includes feedback from my supervisor and highlights my strengths and areas for improvement. This video serves as a reflection of my growth and learning throughout the practicum experience."
            name="Glaiza Camille Sarmiento"
            course="QA Engineer/My Supervisor"
            videoUrl="https://www.youtube.com/embed/zaNlrtoYXHM"
            thumbnail="/thumbnail.png"
            alt="Short Video"
            videoRight={true}
            />
            <Footer/>
        </main>
    ); 
}