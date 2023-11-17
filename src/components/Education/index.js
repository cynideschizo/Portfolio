import React from 'react';
import './CardWithParagraph.css'; // Import a CSS file for styling

const CardWithParagraph = () => {
  return (
    <div className="container">
      <div className="left-side">
        {/* Paragraph content */}
        <h2>Left Side</h2>
        <p>This is the content on the left side.</p>
      </div>
      <div className="right-side">
        {/* Card content */}
        <div className="card">
          <h2>Card</h2>
          <p>This is the content of the card on the right side.</p>
        </div>
      </div>
    </div>
  );
};

export default CardWithParagraph;

