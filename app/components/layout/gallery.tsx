"use client"

import Image from "next/image"

export default function Gallery() {
  const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
    "/gallery7.jpg",
    "/gallery8.png",
  ]

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="inline-flex w-full flex-nowrap overflow-hidden">
        <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
          {images.map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={288}
                height={200}
                className="h-full w-72 object-cover rounded-lg shadow-md"
              />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4"
          aria-hidden="true"
        >
          {images.map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={288}
                height={200}
                className="h-full w-72 object-cover rounded-lg shadow-md"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
