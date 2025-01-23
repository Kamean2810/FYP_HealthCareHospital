import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Healthcare Medical Institute is a state-of-the-art facility where advanced
             medicine meets compassionate care. Our team of dedicated professionals is
             committed to providing personalized, high-quality healthcare tailored to the unique
            needs of each patient. We believe that every patient deserves not only
             exceptional clinical care but also a healing environment that nurtures
             both the body and the spirit.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="Hdoctor-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>

        </div>
      </div>
    </>
  );
};

export default Hero;