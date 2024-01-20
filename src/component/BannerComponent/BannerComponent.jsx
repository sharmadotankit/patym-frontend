import React from "react";
import "./BannerComponent.scss";
import sendMoneyIcon from "../../assets/send-money.png";
import bannerImage from "../../assets/banner2.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons';

const DownloadButton = () => {
    return (
      <button className="download-button">
        Download Paytm App
        <div className="icons">
          <FontAwesomeIcon icon={faApple} />
          <FontAwesomeIcon icon={faGooglePlay} />
        </div>
      </button>
    );
  };

export default function BannerComponent() {
  return (
    <div className="banner-component-div">
      <div className="left-banner-div">
        <div className="send-money-div">
          <img src={sendMoneyIcon} alt="Send money to anyone" height={"100px"} />
          <h6> Send Money to Anyone</h6>
        </div>

        <div className="intro">
          <h1 className="header-style-1">The Most Reliable</h1>
          <h1 className="header-style-2">UPI Payment App in the Country.</h1>
          <h6>
            With the Paytm App, <span className="header-style-1" >Transfer Funds</span> or <span className="header-style-1" >Pay</span>  anyone without a worry in
            the world. It is convenient with built-in safety features & easy
            access to your account balance & payment history.
          </h6>
          <DownloadButton/>
        </div>
      </div>
      <div className="right-banner-div">
        <div>
          <img src={bannerImage} alt="Banner Image" height={"500px"} />
        </div>
      </div>
    </div>
  );
}
