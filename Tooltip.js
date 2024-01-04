// Tooltip.js

import React from 'react';
import './Tooltip.css';

const Tooltip = () => {
  return (
    <>
      <br />
      <br />
      <div className="tooltip-container">
        
        <div className="text">
          <a className="icon" href="">
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab fa-linkedin">
                <svg viewBox="0 0 448 512" height="1em">
                  <path
                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="text">LinkedIn</div>
          </a>
        </div>
        <br></br>
        <div className="text">
          <a className="icon" href="">
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab fa-facebook">
                <svg viewBox="0 0 25 25" height="1em">
                  {/* Include the Facebook SVG path here */}
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 1.5H6.5C3.73858 1.5 2.5 2.73858 2.5 5.5V17.5C2.5 20.2614 3.73858 21.5 6.5 21.5H12V14.5H9.5V11.5H12V9.5C12 6.46243 13.6939 5.5 16.5 5.5H18.5V1.5ZM17 12H18V14.5H17V12Z" />
                </svg>
              </span>
            </div>
            <div className="text">Facebook</div>
          </a>
        </div>
        <br></br>
        <div className="text">
          <a className="icon" href="">
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab fa-instagram">
                <svg viewBox="0 0 25 25" height="1em">
                  {/* Include the Instagram SVG path here */}
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2.5C7.097 2.5 2.5 7.097 2.5 12.5S7.097 22.5 12.5 22.5S22.5 17.903 22.5 12.5S17.903 2.5 12.5 2.5ZM13.5 17.5H11.5V14.5H13.5V17.5ZM12.5 14.5C11.6716 14.5 11 13.8284 11 13C11 12.1716 11.6716 11.5 12.5 11.5C13.3284 11.5 14 12.1716 14 13C14 13.8284 13.3284 14.5 12.5 14.5Z" />
                </svg>
              </span>
            </div>
            <div className="text">Instagram</div>
          </a>
        </div>
      </div>
      <br /><br /><br />
      {/* Add the other tooltip components here */}
    </>
  );
};

export default Tooltip;
