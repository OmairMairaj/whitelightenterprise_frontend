import React from 'react';
// Import the custom CSS

const LightingCard = () => {
  const categories = [
    {
      name: ' ',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
    {
      name: 'Pendants',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
    {
      name: 'Wall Lights',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
    {
      name: 'Table Lamps',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
    {
      name: 'Floor Lamps',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
    {
      name: 'Floor Lamps',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
    {
      name: 'Floor Lamps',
      imgSrc: 'https://via.placeholder.com/200x200', // Replace with actual image URL
    },
  ];

  return (
    <div className="lighting-card-container">
      <h3 className="lighting-card-title">
         asdf
      </h3>
      <div className="lighting-card-grid">
        {categories.map((category, index) => (
          <div key={index} className="lighting-card-item">
            <div
              className="lighting-card-image"
              style={{ backgroundImage: `url(${category.imgSrc})` }}
            ></div>
            <h5 className="lighting-card-name">{category.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LightingCard;
