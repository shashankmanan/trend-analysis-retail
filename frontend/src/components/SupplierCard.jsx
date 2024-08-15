import React, { useState, useEffect } from 'react';

export default function SupplierCard({ name, desc, environmentalRating }) {
  const [color, setColor] = useState('white');

  useEffect(() => {
    switch (environmentalRating) {
      case 5:
        setColor('green');
        break;
      case 4:
        setColor('lightgreen');
        break;
      case 3:
        setColor('yellow');
        break;
      case 2:
        setColor('orange');
        break;
      case 1:
        setColor('red');
        break;
      default:
        setColor('white');
    }
  }, [environmentalRating]);

  return (
    <div className="col-md-4 seller-card">
      <div className="card">
        <div className="card-body" style={{ backgroundColor: color }}>
          <h5 className="card-title">{name}</h5>
          <h6 className="card-title">Environmental Rating: {environmentalRating}</h6>
          <ul>
            {desc.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
