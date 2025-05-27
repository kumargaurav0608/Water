import React, {useState} from "react";

const Nobooking=()=>{
    const [showBanner, setShowBanner]=useState(true);

    if(!showBanner) return null;

    return (
        <>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-auto ">
                <strong className="font-bold">Warning !</strong>
                <span className="block sm:inline">
                    Be Careful ! We never accept online payment System for Booking . Only coounter Ticket Available.
                </span>
                <button onClick={()=>setShowBanner(false)} className="absolute top-1 right-2 text-red-700 text-2xl leading-none font-bold hover:text-red-900 cursor-pointer" aria-label="Close">

                    &times;
                </button>

            </div>
        </>
    );
}

export default Nobooking;