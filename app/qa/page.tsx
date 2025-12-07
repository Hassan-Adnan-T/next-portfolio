import Navbar from "../components/ui/navbar"
import Footer from "../components/ui/footer"
import PageTransition from "../components/ui/page-transition"
import Templates from "./components/templates"
import BugReport from "./components/bug-report"

export default function QA() {
    return (
        <PageTransition>
            <main className="relative bg-white">
                <Navbar/>
                <Templates/>   
                <BugReport/> 
                <Footer/>
            </main>
        </PageTransition>
    )
}