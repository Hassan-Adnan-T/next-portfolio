'use client'

import { useState, useEffect } from "react"

export default function Project() {
    const projects = [
        {
            id: 1,
            title: 'Huenique',
            description: 'an interactive color analysis web application providing personalized style recommendations',
            image: '/huenique.png',
            link: 'https://github.com/PUP-BSIT/project-v2/tree/main',
        },
        {
            id: 2,
            title: 'Wibs Depot',
            description: ' a full-stack e-commerce web application with features including shopping cart management, profile updates, and order tracking.',
            image: '/wibs.png',
            link: 'https://github.com/PUP-BSIT/project-wibs',
        },
        {
            id: 3,
            title: 'RoyalRescue',
            description: 'a 2D platformer game using GDevelop, a no-code game development platform.',
            image: '/royalrescue.jpeg',
            link: 'https://gamejolt.com/games/Royalrescue/894080',
        },
        {
            id: 4,
            title: 'PUP-FESR',
            description: ' a full-stack web application that manages faculty Information, Evaluation and Research Repository.',
            image: '/fesr.png',
            link: 'https://github.com/PUPT-HRIS/PUPTHRIS',
        },
        {
            id: 5,
            title: 'The Disappearance of Darryl Burnham',
            description: 'A point-and-click mystery escape room puzzle game developed in Java, emphasizing discovery and exploration.',
            image: '/darryl.png',
            link: 'https://github.com/Hassan-Adnan-T/The-Disappearance-of-Darryl-Burnham',
        },
    ]

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])
    
    return(
        <div id="projects" className="container mx-auto px-4 py-8">
            <h1 className="flex justify-center text-black font-black text-5xl font-barlow p-2 pt-1 pb-10 self-center">PROJECTS</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            {isLoading ? (
                                <div className="skeleton w-full h-48"></div>
                            ) : (
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                        </figure>
                        <div className="card-body bg-[#001738] rounded-xl shadow-sm">
                            {isLoading ? (
                                <>
                                    <div className="skeleton h-8 w-3/4 mb-2"></div>
                                    <div className="skeleton h-4 w-full mb-2"></div>
                                    <div className="skeleton h-4 w-2/3 mb-4"></div>
                                    <div className="skeleton h-10 w-32 ml-auto"></div>
                                </>
                            ) : (
                                <>
                                    <h2 className="card-title text-white">{project.title}</h2>
                                    <p className="text-white">{project.description}</p>
                                    <div className="card-actions justify-end">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            <button className="btn bg-[#F97316] border-none rounded-xl text-white">View Project</button>
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}