'use client';

import { link } from "fs";

export default function Tracking() {
    const trackingDocuments = [
        {
            id: 1,
            title: 'Daily Time Record',
            description: 'A record of my daily attendance and hours worked during the internship.',
            link: 'https://drive.google.com/drive/folders/1sozZs0yi07EWNMGblBRslnee_KQKmji5?usp=sharing',
            file: '/dtr.pdf',
        },
        {
            id: 2,
            title: 'Weekly Accomplishment Report',
            description: 'A summary of my weekly tasks and accomplishments during the internship.',
            link: 'https://drive.google.com/drive/folders/14TTfi1g7rP_jOp6gUw2tnS8acnkShlLt?usp=drive_link',
            file: '/war.pdf',
        },
    ]

    return (
        <div>
            <h1 className="text-black font-barlow text-5xl font-black sm:px-8 md:px-16 lg:px-24 flex justify-center">TRACKING</h1>
            <div className="flex w-full flex-col lg:flex-row p-10 flex-wrap gap-10 justify-center">
                {trackingDocuments.map((doc) => (
                    <a
                        key={doc.id}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card bg-gray-100 rounded-box p-6 w-full lg:w-1/3 no-underline hover:bg-[#F97316] group transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                    >
                        <h2 className="text-lg font-bold text-black group-hover:text-white">{doc.title}</h2>
                        <p className="text-sm text-black group-hover:text-white">{doc.description}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}