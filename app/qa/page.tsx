import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import PageTransition from "../components/ui/page-transition"

export default function QA() {
    return (
        <PageTransition>
            <main className="relative bg-white">
                <Navbar/>
                <Footer/>
            </main>
        </PageTransition>
    )
}