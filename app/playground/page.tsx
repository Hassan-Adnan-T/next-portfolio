import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import PageTransition from "../components/ui/page-transition"
import UIDesign from "./components/ui-design"
import GraphicDesign from "./components/graphic-design"

export default function Playground() {
    return (
        <PageTransition>
            <main className="relative bg-white">
                <Navbar/>
                <UIDesign/>
                <GraphicDesign/>
                <Footer/>
            </main>
        </PageTransition>
    )
}