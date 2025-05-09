import React from "react";
import styles from "./index.module.scss";
import LinkComponent from "../LinkComponent";

const ContactUsBanner = ({ text, buttonLink, buttonText }) => {

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <img src="/img/apple-touch-icon.png" alt="img" />
        <span>{text}</span>
        <LinkComponent href={buttonLink}>{buttonText}</LinkComponent>
      </div>
    </div>
  );
};

export default ContactUsBanner;
