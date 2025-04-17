'use client';

import { link } from "fs";

export default function Tracking() {
    const trackingDocuments = [
        {
            id: 1,
            title: 'Daily Time Record',
            description: 'A record of my daily attendance and hours worked during the internship.',
            link: 'https://drive.google.com/file/d/1YxXy3r2wJmZ5n6g7v7z7q7v7z7/view?usp=sharing',
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
            <div className="flex w-full flex-col lg:flex-row p-10 flex-wrap gap-4 justify-center">
                {trackingDocuments.map((doc) => (
                    <a
                        key={doc.id}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card bg-[#F9FAFB] rounded-box p-4 w-full lg:w-1/3 no-underline hover:shadow-lg transition-shadow hover:bg-[#F97316] group"
                    >
                        <h2 className="text-lg font-bold text-black group-hover:text-white">{doc.title}</h2>
                        <p className="text-sm text-black group-hover:text-white">{doc.description}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}