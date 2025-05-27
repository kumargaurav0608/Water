import React, {useState} from "react";

const Offer=()=>{
    const [showBanner, setShowBanner]=useState(true);

    if(!showBanner) return null;

    return (
        <>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto ">
                <strong className="font-bold">Offer</strong>
                <img src="" alt="" />
                <button onClick={()=>setShowBanner(false)} className="absolute top-1 right-2 text-red-700 text-2xl leading-none font-bold hover:text-red-900 cursor-pointer" aria-label="Close">
                    &times;
                </button>

            </div>
        </>
    );
}

export default Offer;