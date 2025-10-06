import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import PageTransition from "../components/ui/page-transition"
import UIDesign from "./components/ui-design"
import PixelArt from "./components/pixel-art"

export default function Playground() {
    return (
        <PageTransition>
            <main className="relative bg-white">
                <Navbar/>
                <UIDesign/>
                <PixelArt/>
                <Footer/>
            </main>
        </PageTransition>
    )
}