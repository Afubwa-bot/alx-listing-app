import React from 'react';

export interface CardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => (
  <div className="border rounded-lg overflow-hidden shadow-md">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  </div>
);

export default Card;
