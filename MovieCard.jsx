import React from 'react';

const MovieCard = ({ title, image, description, rating }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="movie-rating">{`Rating: ${rating}/10`}</div>
      </div>
    </div>
  );
};

export default MovieCard;