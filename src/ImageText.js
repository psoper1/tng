import React, { useEffect } from "react";
import tngImage from './imgs/tng-image.jpg';

function ImageText({ activeLink }) {
  useEffect(() => {
    // This will log whenever the activeLink prop changes
    console.log("activeLink changed:", activeLink);
  }, [activeLink]);

  return (
    <>
      <div className="image-text-container">
        <img src={tngImage} alt="True Nature Gaming" className="img-fluid" />
        <div className="image-text-overlay"></div>
        {activeLink === 'home' &&
          <div className="image-text-content">
            <h1>True Nature Gaming</h1>
          </div>
        }
        {activeLink === 'signup' &&
          <div className="image-text-content">
            <h1>Sign Up for a Tournament!</h1>
          </div>
        }
        {activeLink === 'latest tourney' &&
          <div className="image-text-content">
            <h1>Latest Tourney!</h1>
          </div>
        }
        {activeLink === 'about' &&
          <div className="image-text-content">
            <h1>About True Nature Gaming</h1>
          </div>
        }
      </div>
    </>
  )
}

export default ImageText;