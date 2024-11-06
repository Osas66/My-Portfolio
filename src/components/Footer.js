import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

function Footer() {
  return (
    <footer>
      <div className="socials">
        <ul>
          <li
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.linkedin.com/in/osaretin-omorogieva-b9925a325"
              );
            }}
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://www.instagram.com/osaretin_omorogieva?igsh=b2NrNXB3bnJvZXo2"
              );
            }}
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright &copy; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
