import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>

        {/* Links Section */}
        <div className={styles.linksGrid}>
          <ul>
            <li>
              <a href="#">Audio Description</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Gift Cards</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Media Centre</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Bottom Text */}
        <div className={styles.bottom}>
          <p>© 1997-2026 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
