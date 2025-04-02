'use client'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="font-barlow text-2xl font-bold text-[#020202]">MYPORTFOLIO</div>
                <ul className="flex gap-6">
                    <li>
                        <Link 
                            href="/" 
                            className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md"
                            scroll={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/#about" 
                            className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md"
                            scroll={true}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/#projects" 
                            className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md"
                            scroll={true}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/practicum" 
                            className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md"
                        >
                            Practicum
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/#contact" 
                            className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md"
                            scroll={true}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}