"use client"
import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Animated Background Shapes - Only visible on desktop */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {/* Floating Circle 1 */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#F97316] opacity-10 rounded-full animate-float-slow"></div>

        {/* Floating Circle 2 */}
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 opacity-15 rounded-full animate-float-medium"></div>

        {/* Floating Square */}
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-[#F97316] opacity-20 rotate-45 animate-float-fast"></div>

        {/* Large Background Circle */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#F97316] opacity-10 rounded-full animate-pulse-slow"></div>

        {/* Triangle Shape */}
        <div className="absolute bottom-20 right-40 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-400 opacity-20 animate-float-medium"></div>

        {/* Rotating Square */}
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-blue-300 opacity-15 animate-spin-slow"></div>

        {/* Small Dots */}
        <div className="absolute top-32 left-1/3 w-3 h-3 bg-[#F97316] opacity-30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-blue-400 opacity-25 rounded-full animate-ping-slow animation-delay-1000"></div>

        {/* Hexagon Shape */}
        <div className="absolute top-80 right-1/4 w-10 h-10 bg-[#F97316] opacity-15 clip-hexagon animate-float-slow"></div>
      </div>

      <div className="container mx-auto bg-[#001738] p-8 sm:p-12 md:p-20 lg:p-36 rounded-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-barlow text-white">
              ADNAN HASSAN
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 font-karla text-[#F97316]">
              Aspiring DevOps & QA Automation
            </h2>
            <p className="text-white text-sm sm:text-base md:text-md mb-6 font-karla max-w-md mx-auto md:mx-0">
              QA Tester Intern at KMC Solutions, executing manual and automated tests, tracking bugs in Asana, and
              ensuring software quality through functional and performance testing.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              {/* Social Links */}
              <a
                href="https://www.linkedin.com/in/adnan-hassan-16b817225/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-white hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com/Hassan-Adnan-T" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="w-6 h-6 text-white hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="#projects"
                className="bg-[#F97316] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:cursor-pointer transition font-karla duration-300 ease-in-out"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="border border-[#F97316] text-[#F97316] px-5 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#F97316] hover:text-white transition font-karla"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden bg-gray-200">
              <img src="/profile.jpg" alt="Profile photo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-lg"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(10px); }
          75% { transform: translateY(-5px) translateX(-10px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-25px) rotate(225deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </section>
  )
}
