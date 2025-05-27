import React from "react";

const VideoBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="/video/homeVideo.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div className="relative flex  items-center flex-col justify-center h-full text-white gap-10">
        
        <p className="text-center">Dive into Fun at Water Valley Water Park</p>
        <h1 className="text-4xl font-bold text-center">A Really Good Place to Fun and Adventure In the City of Muzaffarpur</h1>
        <p className="text-center">Water Valley Water Park (A unit of Ananda Resorts) is the crown jewel of Bihar’s recreational attractions! <br></br> Spanning over acres of lush greenery and crystal-clear waters, our park is more than just a place<br></br>it’s an experience waiting to be explored. Designed with a perfect blend of thrill, relaxation, and fun, <br></br>Water Valley is the ultimate destination for all age groups.</p>
       
      </div>
    </div>
  );
};

export default VideoBackground;
