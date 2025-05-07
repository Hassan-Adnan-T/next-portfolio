"use client"

export default function Gallery() {
    return (
        <div className="w-full overflow-x-auto scrollbar-visible">
            <div className="carousel carousel-center rounded-box relative w-max h-96 mt-10 mb-2 px-2 flex gap-2">
                {[
                    "/gallery1.png",
                    "/gallery2.png",
                    "/gallery3.png",
                    "/gallery4.png",
                    "/gallery5.png",
                    "/gallery6.png",
                    "/gallery7.jpg",
                    "/gallery8.png",
                    "/gallery2.png",
                    "/gallery3.png",
                    "/gallery4.png",
                    "/gallery5.png",
                    "/gallery8.png",
                    "/gallery7.jpg",

                ].map((src, id) => (
                    <div key={id} className="carousel-item">
                        <img
                            loading="lazy"
                            src={src}
                            alt={`Gallery ${id + 1}`}
                            className="h-full w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
