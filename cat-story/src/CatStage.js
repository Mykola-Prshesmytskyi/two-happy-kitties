import React from 'react';

const CatStage = ({ apology }) => {
  return (
    <div className="cat-stage">
      <p className="apology-text">🐾 {apology.text}</p>
    </div>
  );
};

export default CatStage;