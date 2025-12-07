export default function UIDesign() {
    return (
        <div className="flex flex-col items-center justify-center h-screen -mb-20">
            <h1 className="text-black text-4xl font-bold font-barlow">UI Design</h1>
            <div className="underline text-black flex flex-col items-center justify-center font-karla">
                This is UI Designs I made for fun.
            </div>
            <div className="pt-10 flex flex-row items-center justify-center mt-4">
                <img
                    src="/coffee.png"
                    alt="coffee"
                    className="card bg-base-100 w-96 shadow-sm rounded-xl"
                />
                <div className="flex flex-col items-start justify-center ml-8">
                    <h2 className="text-black text-2xl font-bold font-barlow">SmartBeans</h2>
                    <p className="text-black text-sm font-karla">
                        SmartBeans is a coffee shop app that can be used to order your coffee.
                    </p>
                </div>
            </div>
        </div>
    )
}
