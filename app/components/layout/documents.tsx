"use client";

export default function Documents() {
    return ( 
        <div className="flex w-full flex-col lg:flex-row p-10">
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">content</div>
        </div>
    )
}