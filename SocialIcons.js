// SocialIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './SocialIcons.css';

const SocialIcons = () => {
  return (
    <ul>
      <li className="item">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
      </li>
      <li className="item">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
      </li>
      <li className="item">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="icon" />
        </a>
      </li>
      <li className="item">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="icon" />
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
