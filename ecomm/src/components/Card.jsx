import React from 'react';

const Card = ({ product_name, description, price, category, image }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '16px'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={product_name} style={imageStyle} />
      <h2>{product_name}</h2>
      <p>{description}</p>
      <p><strong>Category:</strong> {category}</p>
      <h3>${price}</h3>
      <button style={buttonStyle}>Buy Now</button>
    </div>


  );
};

export default Card;
