import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faApple,
  faGooglePlay ,
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-element">
      <div className="left-footer">
        <p>Download Paytm App to Pay from anywhere</p>
        <button>
          <FontAwesomeIcon icon={faApple} className="icon-img" />
          <span>
            Download from <br/><span className="btn-highlight">App Store</span>
          </span>
        </button>
        <button>
          <FontAwesomeIcon icon={faGooglePlay } className="icon-img" />
          <span>
          Get it on <br/><span className="btn-highlight">Google Play</span>
          </span>
          
        </button>
      </div>
      <div className="right-footer">
        <FontAwesomeIcon icon={faTwitter} style={{ marginRight: "10px" }} />
        <FontAwesomeIcon icon={faInstagram} style={{ marginRight: "10px" }} />
        <FontAwesomeIcon icon={faFacebook} />
      </div>
    </footer>
  );
};

export default Footer;
