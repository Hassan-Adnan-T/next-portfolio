"use client";

import { title } from 'process';
import React from 'react';

type VidResumeProps = {
    title?: string;
    description?: string;
    name?: React.ReactNode;
    course?: string;
    thumbnail?: string;
    videoUrl?: string;
    alt?: string;
    videoRight?: boolean;
};

export default function VidResume({
    title = "VIDEO RESUME",
    description = "This video resume showcases my skills, experiences, and aspirations in the field of technology. I am a dedicated and passionate individual, eager to contribute to innovative projects and collaborate with talented teams.",
    name = "Adnan Hassan",
    course = "Bachelor of Science in Information Technology 4-1",
    thumbnail = "/thumbnail.png",
    videoUrl = "https://www.youtube.com/embed/zaNlrtoYXHM",
    alt = "Video Resume",
    videoRight = false,
}: VidResumeProps) {
    const [showVideo, setShowVideo] = React.useState(false);
    const handleVideoClick = () => {
        setShowVideo(true);
    };
    const handleVideoClose = () => {
        setShowVideo(false);
    };

    return (
        <div className="bg-[#001738] w-full py-16">
            <div className="max-w-6xl mx-auto">     
            <div className={`flex flex-col lg:flex-row items-center px-4 lg:px-0 sm:pl-24 justify-center  ${videoRight ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative w-full lg:w-7/12 flex justify-center ${videoRight ? 'lg:pl-16' : 'lg-pr-16'}`}>
                    <img
                    className='rounded-lg shadow-lg cursor-pointer' 
                    src={thumbnail} 
                    alt={alt}
                    onClick={handleVideoClick}
                    />
                </div>

                <div className="w-full lg:w-6/12 mt-8 lg:mt-0 lg:pl-16">
                    <h1 className="flex font-barlow font-bold text-5xl text-white mb-10">{title}</h1>
                    
                    <p className="text-white mb-4 text-lg font-karla leading-relaxed">
                    {description}
                    </p>
                    
                    <div className="mt-4">
                    <h3 className="text-orange-500 font-semibold text-xl font-karla">{name}</h3>
                    <p className="text-white">{course}</p>
                    </div>
                </div>
                </div>
            </div>
            {showVideo && (
            <div className="fixed inset-0 z-[99999] bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <div className="relative z-10 w-[90%] h-[80%]">
                <button
                    onClick={handleVideoClose}
                    className="fixed right-10 top-10 z-[999999] bg-white w-10 h-10 rounded-full text-black text-2xl flex items-center justify-center shadow-lg cursor-pointer"
                >
                    &times;
                </button>
                <iframe
                    src={videoUrl}
                    title="Video Resume"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl shadow-2xl"
                ></iframe>
                </div>
            </div>
            )}
        </div>
    );
}

