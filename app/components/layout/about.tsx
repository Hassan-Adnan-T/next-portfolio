'use client';

export default function About() {
  return (
    <div id="about" className="bg-[#EFF6FF] px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 py-10">
      <div className="text-black font-black text-4xl sm:text-5xl font-barlow p-2 pt-1 pb-10 text-center">ABOUT ME</div>
      <ul className="timeline timeline-snap-icon timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F97316" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 text-left sm:text-right">
            <time className="font-mono italic text-[#F97316]">April 2025</time>
            <div className="text-lg text-black font-bold">Former QA Intern at KMC Solutions</div>
            <div className="text-black">
              As former QA Tester Intern at KMC Solutions, I execute <span className="text-[#F97316] font-black">manual</span> and <span className="text-[#F97316] font-black">automated tests</span>, document test plans, and track bugs using Asana.
              I collaborate with teams to ensure software quality through <span className="text-[#F97316] font-black">functional</span>, <span className="text-[#F97316] font-black">regression</span>, and <span className="text-[#F97316] font-black">performance</span> testing while providing UI/UX feedback.
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F97316" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10 text-left">
            <time className="font-mono italic text-[#F97316]">2021 - 2025</time>
            <div className="text-lg font-black text-black">Attended Polytechnic University of the Philippines - Taguig Branch</div>
            <div className="text-black">
              Pursued a Bachelor of Science in Information Technology (BSIT), gaining experience with
              <span className="text-[#F97316] font-black"> C++</span>, <span className="text-[#F97316] font-black">Angular</span>, <span className="text-[#F97316] font-black">JavaScript</span>, and <span className="text-[#F97316] font-black">Python</span>,
              along with <span className="text-[#F97316] font-black">GitHub</span>, <span className="text-[#F97316] font-black">DevOps</span>, and <span className="text-[#F97316] font-black">Agile methodologies</span>.
            </div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F97316" className="h-5 w-5">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 text-left sm:text-right">
            <time className="font-mono italic text-[#F97316]">2020 - 2021</time>
            <div className="text-lg font-black text-black">Attended AMA College Makati</div>
            <div className="text-black">
              Studied Information and Communications Technology (ICT), learned <span className="text-[#F97316] font-black">Java</span>, and developed my first game—a point-and-click mystery
              game—which sparked my passion for <span className="text-[#F97316] font-black">programming</span> and <span className="text-[#F97316] font-black">software development</span>.
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}
