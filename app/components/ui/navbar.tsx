'use client'

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-barlow text-2xl font-bold text-[#020202]">MYPORTFOLIO</div>
        <ul className="flex gap-6">
          <li><a href="#home" className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Home</a></li>
          <li><a href="#about" className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">About</a></li>
          <li><a href="#projects" className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Projects</a></li>
          <li><a href="#skills" className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Skills</a></li>
          <li><a href="#contact" className="text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
}