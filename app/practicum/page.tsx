import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import Company from "../components/layout/company";
import VidResume from "../components/layout/vidResume";
import Documents from "../components/layout/documents";
import Gallery from "../components/layout/gallery";
import Tracking from "../components/layout/tracking";
import PageTransition from "../components/ui/page-transition";

export default function Practicum() {
    return (
        <PageTransition>
            <main className="relative bg-white">
                <Navbar/>
                <Company/>
                <VidResume/>
                {/* <Documents/>
                <Tracking/> */}
                <Gallery/>
                <VidResume
                title="VIDEO EVALUATION"
                description="an evaluation of my performance during the practicum. It includes feedback from my supervisor and highlights my strengths and areas for improvement. This video serves as a reflection of my growth and learning throughout the practicum experience."
                name={
                    <>
                        Jerome Culcul
                    </>
                }
                course="QA Engineer"
                videoUrl="https://www.youtube.com/embed/30QgIrs9ScA"
                thumbnail="/videoeval.png"
                alt="Video Evaluation"
                videoRight={true}
                />
                <Footer/>
            </main>
        </PageTransition>
    ); 
}