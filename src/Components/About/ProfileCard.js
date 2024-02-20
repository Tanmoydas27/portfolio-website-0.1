import React from "react";
import "./ProfileCard.scss";
import {LazyLoadImage} from 'react-lazy-load-image-component'


const ProfileCard = () => (
    <div className="profile-card">
      <LazyLoadImage className="profile-card__img" wrapperClassName="profile-card__img" alt="Tanmoy Das, Software Developer Based In Kolkata, West bengal, India" src="/Aboutme.jpg" delayTime={0} effect="blur" placeholderSrc={''}/>
      <div className="profile-card__content">
        <h4 className="tg__title-6 profile-card__content__title">
          Tanmoy Das
        </h4>
        <p className="tg__body-1 profile-card__content__email">
          <a href="mailto:dast91330@gmail.com" style={{color:'black', textDecoration:'none'}}>dast91330@gmail.com</a>
        </p>
        <div className="profile-card__content__social">
          <a  target="_blank" aria-label="true" href="https://www.facebook.com/profile.php?id=100011876958805&mibextid=2JQ9oc"><img src="facebook.png"width={25} height={25}></img></a>
          <a style={{marginLeft:'25px'}} target="_blank" aria-label="true" href="https://www.instagram.com/exclusivetanmoy.2002?igsh=YzljYTk1ODg3Zg=="><img src="instagram.png"width={25} height={25}></img></a>
          <a style={{marginLeft:'25px'}} target="_blank" aria-label="true" href="https://www.github.com/Tanmoydas27"><img src="github.png"width={25} height={25}></img></a>
          <a style={{marginLeft:'25px'}} target="_blank" aria-label="true" href="https://www.linkedin.com/in/tanmoy-das-cse"><img src="linkedin.png"width={25} height={25}></img></a>
        </div>
      </div>
    </div>
  );
  
  export default ProfileCard;