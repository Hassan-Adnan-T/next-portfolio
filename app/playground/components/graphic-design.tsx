export default function GraphicDesign() {
    return (
        <div>
            <h1 className="text-black text-4xl font-bold font-barlow text-center">Graphic Design</h1>
            <div className="underline text-black flex flex-col items-center justify-center font-karla">
                This is Graphic Designs I made for fun.
            </div>
            <div className="flex flex-row items-center justify-center mt-4 pb-10">
                <img
                    src="/Gym.png"
                    alt="graphic-design"
                    className="bg-base-100 w-96 shadow-sm"
                />
            </div>
        </div>
    )
}