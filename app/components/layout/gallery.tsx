"use client"

export default function Gallery() {
    return (
        <div className="w-full overflow-x-auto scrollbar-visible">
            <div className="carousel carousel-center rounded-box relative w-max h-96 mt-10 mb-2 px-2 flex gap-2">
                <div className="carousel-item">
                    <img src="/gallery1.png" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/gallery2.png" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/gallery3.png" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/gallery4.png" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/gallery5.png" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/gallery6.png" alt="Burger" />
                </div>
                <div className="carousel-item">
                    <img src="/gallery7.jpg" alt="Burger" />
                </div>
            </div>
        </div>
    )
}
