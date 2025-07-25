"use client";

export default function Documents() {
    const documents = [
        {
            id: 1,
            title: 'Memorandum of Agreement',
            description: 'A formal agreement outlining the terms and conditions of my internship.',
            file: '/resume.pdf',
            link: 'https://drive.google.com/file/d/1AQ4mu4F4HEkp67pDm30WcrHe4ilWiSjc/view?usp=sharing'
        },
        {
            id: 2,
            title: 'Acceptance Letter',
            description: 'An official letter confirming my acceptance into the internship program.',
            file: '/certificate.pdf',
            link: 'https://drive.google.com/drive/folders/1hpOahGlt3__khPEy8UT78N6lZNbfY8EL?usp=sharing'
        },
        {
            id: 3,
            title: 'Consent Form',
            description: 'An official record of my academic performance.',
            file: '/transcript.pdf',
            link: 'https://drive.google.com/file/d/1YxXy3r2wJmZ5n6g7v7z7q7v7z7/view?usp=sharing'
        },
        {
            id: 4,
            title: 'Recommendation Letter',
            description: 'A form granting permission for my participation in the internship program.',
            file: '/employment_certificate.pdf',
            link: 'https://drive.google.com/file/d/1B8YTb_pvEEv9q7rZnhQ5p7-pAvGSke38/view?usp=sharing'
        },
        {
            id: 5,
            title: 'Student Information Sheet',
            description: 'A letter from my professor recommending me for the internship.',
            file: '/portfolio.pdf',
            link: 'https://drive.google.com/file/d/1RIvgvbo6MAU6PzP8hklRd4cFFEN-473x/view?usp=sharing'
        },
        {
            id: 6,
            title: 'Training Partner Sheet',
            description: 'A report detailing my contributions to various projects.',
            file: '/project_report.pdf',
            link: 'https://drive.google.com/file/d/1i-3VmJxCOmhZQm4lIW3vkwy6fKRku485/view?usp=sharing'
        },
    ]

    return (
        <div>
            <h1 className="text-black font-barlow font-bold text-5xl sm:px-8 md:px-16 lg:px-24 pt-10 flex justify-center">DOCUMENTS</h1>
            <div className="flex w-full flex-col lg:flex-row p-10 flex-wrap gap-10 justify-center">
                {documents.map((doc) => (
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
    );
}