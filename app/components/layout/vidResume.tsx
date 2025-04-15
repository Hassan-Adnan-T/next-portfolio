export default function VidResume() {
    return (
        <div className="bg-blue-50 w-full py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-center text-4xl md:text-5xl font-barlow font-bold mb-16 text-black">
                    VIDEO RESUME
                </h1>
                
                <div className="flex flex-col lg:flex-row items-center px-4 lg:px-0 sm:pl-24 justify-center">
                <div className="relative w-full lg:w-7/12 flex justify-center">
                        <iframe 
                            className="w-full max-w-lg aspect-video rounded-lg shadow-lg"
                            src="https://www.youtube.com/embed/njEi9G2y440" 
                            title="Video Resume Player" 
                            frameBorder="0" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    
                    <div className="w-full lg:w-6/12 mt-16 lg:mt-24 lg:pl-16">
                    <h1 className="text-black">viddeo is a placeholder</h1>
                        <p className="text-gray-700 mb-8 text-lg font-karla leading-relaxed">
                            "This video resume showcases my skills, experiences, and aspirations in the field of technology.
                            I am a dedicated and passionate individual, eager to contribute to innovative projects and collaborate with talented teams."
                        </p>
                        
                        <div className="mt-6">
                            <h3 className="text-orange-500 font-semibold text-xl font-karla">Adnan Hassan</h3>
                            <p className="text-gray-600">Bachelor of Science in Information Technology 4-1</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}