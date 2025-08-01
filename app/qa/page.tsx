import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import PageTransition from "../components/ui/page-transition"
import Templates from "./components/templates"

export default function QA() {
    return (
        <PageTransition>
            <main className="relative bg-white">
                <Navbar/>
                <Templates/>    
                <Footer/>
            </main>
        </PageTransition>
    )
}