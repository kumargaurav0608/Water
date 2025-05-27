import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice",
    text: "This product changed my life! Highly recommend it.",
    avatar: "https://i.pravatar.cc/60?img=1",
  },
  {
    id: 2,
    name: "Bob",
    text: "Amazing quality and great customer support.",
    avatar: "https://i.pravatar.cc/60?img=2",
  },
  {
    id: 3,
    name: "Charlie",
    text: "Five stars! Will buy again.",
    avatar: "https://i.pravatar.cc/60?img=3",
  },
  {
    id: 4,
    name: "Diana",
    text: "A perfect fit for my needs. Exceeded expectations.",
    avatar: "https://i.pravatar.cc/60?img=4",
  },
  {
    id: 5,
    name: "Ethan",
    text: "Fast delivery and works as advertised.",
    avatar: "https://i.pravatar.cc/60?img=5",
  },
  {
    id: 6,
    name: "Fiona",
    text: "Customer service was very helpful and friendly.",
    avatar: "https://i.pravatar.cc/60?img=6",
  },
];

export default function ScrollReview() {
  // State to track current starting index
  const [startIndex, setStartIndex] = useState(0);

  // Show 3 reviews at a time
  const visibleCount = 3;

  // Calculate max start index so we don't go out of range
  const maxStartIndex = reviews.length - visibleCount;

  // Handler for next button
  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStartIndex ? prev + 1 : 0));
  };

  // Handler for prev button
  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStartIndex));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6 text-center">Customer Reviews</h2>
      
      <div className="relative">
        {/* Reviews Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(startIndex * 100) / visibleCount}%)`,
              width: `${(reviews.length * 100) / visibleCount}%`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-1/3 p-4"
              >
                <div className="bg-white shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <h3 className="font-bold text-lg">{review.name}</h3>
                  </div>
                  <p className="text-gray-600">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          aria-label="Previous Reviews"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          aria-label="Next Reviews"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
        >
          ›
        </button>
      </div>
    </div>
  );
}
