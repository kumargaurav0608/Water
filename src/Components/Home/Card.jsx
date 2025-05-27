// components/Card.jsx
import React from 'react';

const Card = ({ title, description, image, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm hover:shadow-lg transition-shadow duration-300 ">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
