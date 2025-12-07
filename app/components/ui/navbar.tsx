'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="font-barlow text-2xl font-bold text-[#020202]">MYPORTFOLIO</div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#020202]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Navigation Links */}
        <AnimatePresence>
          <ul className={`md:flex gap-6 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full bg-white md:w-auto md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="block md:inline text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Home</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <Link href="/#about" className="block md:inline text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">About Me</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <Link href="/#projects" className="block md:inline text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Projects</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.3 }}
            >
              <Link href="/practicum" className="block md:inline text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Practicum</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <Link href="/playground" className="block md:inline text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">Designs</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
            >
              <Link href="/qa" className="block md:inline text-[#020202] font-karla hover:bg-[#F1F1F1] px-3 py-2 rounded-md">QA</Link>
            </motion.li>
          </ul>
        </AnimatePresence>
      </div>
    </nav>
  );
}
