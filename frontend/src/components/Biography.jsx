import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Biography</h3>
          <p>
          <h5>Healthcare Medical Institute</h5> is a leading healthcare facility committed to providing 
          exceptional medical services with a focus on compassion, innovation, and personalized care.
          Founded with the vision to offer a comprehensive approach to health and wellness, 
          the institute combines state-of-the-art technology with a team of skilled professionals 
          dedicated to delivering top-tier care.
          With a deep commitment to improving patient outcomes and fostering long-term wellness,
          we offer a wide range of services, including preventive care, specialized treatments, 
          and holistic wellness programs. At Healthcare, we believe in treating the whole person—body, 
          mind, and spirit—ensuring that every patient receives the attention, expertise, and support 
          they deserve.
          Our mission is to create a healing environment that empowers patients to take control of 
          their health and live their best lives, knowing they are in caring, capable hands.
          </p>
          <p>At Healthcare Medical Institute, we believe that true healing begins with trust and compassion, 
            and we are here to ensure you experience both in every step of your care.</p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;