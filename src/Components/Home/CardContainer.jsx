// pages/CardContainer.jsx or App.jsx
import React from 'react';
import Card from './Card';

const CardContainer = () => {
  return (
    <>
    <div className="max-md:grid max-md:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:flex md:flex-row md:justify-around">
      <Card
        title="Water Sliding" 
        description="For the thrill-seekers, our water slides are a must-try! From high-speed drops to twisting tunnels,
         these slides offer an adrenaline rush like no other. Each slide is uniquely designed to provide a different experience,
          ensuring that there’s something for everyone, from beginners to the most daring adventurers."
        image="/img/waterslide.jpg"
      />
      <Card
        title="Waterfall"
        description="Immerse yourself in the refreshing cascade of our stunning waterfall. 
        Designed to replicate the beauty of nature, this serene spot is perfect for those looking to unwind.
         Stand beneath the falling water, let the cool mist rejuvenate you, and feel your stress wash away."
        image="/img/waterfall.jpg"
      >
        {/* <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          Book Now
        </button> */}
      </Card>
      <Card
        title="WavePool"
        description="Experience the thrill of the ocean right in the heart of Bihar! 
        Our expansive wave pool mimics the natural waves of the sea, offering a perfect blend of excitement and relaxation.
         Whether you’re looking to ride the waves or simply float along, this attraction promises endless fun for all ages."
        image="/img/wavepool.jpg"
      />
    </div>
    </>
  );
}

export default CardContainer;
