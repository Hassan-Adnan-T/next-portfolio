'use client'

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
    
    return(
        <div id="projects" className="container mx-auto px-4 py-8">
            <h1 className="flex justify-center text-black font-black text-5xl font-barlow p-2 pt-1 pb-10 self-center">PROJECTS</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="card bg-base-100 w-96 shadow-sm">
                        <figure>
                            <img 
                            src={project.image} 
                            alt={project.title} 
                            />
                        </figure>
                        <div className="card-body bg-[#001738] rounded-xl shadow-sm">
                            <h2 className="card-title">{project.title}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions justify-end">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="btn bg-[#F97316] border-none rounded-xl">View Project</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}