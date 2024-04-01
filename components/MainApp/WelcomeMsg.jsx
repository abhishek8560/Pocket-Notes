import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import styles from "./WelcomeMsg.module.css";
import welcomeImage from "../../assets/WelcomeImage.png";

function WelcomeMsg() {
  return (
    <div className={styles.welcomePageContainer}>
      <img src={welcomeImage} alt="Welcome Image" />
      <h1>Pocket Notes</h1>
      <p>"Welcome to the journey of knowledge!"</p>
      <p>"Embrace each moment with curiosity and wonder!"</p>
      <p>"May your path be filled with inspiration!"</p>

      <div className={styles.creditContainer}>
        <p>Created by Abhishek Yadav</p>
        <div>
          <a
            href="https://www.linkedin.com/in/abhishek-yadav-185647180/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:abhishekyadav6149@gmail.com" target="_blank">
            <IoMdMail />
          </a>
          <a href="https://twitter.com/Abhishe64173890" target="_blank">
            <BsTwitterX />
          </a>
        </div>
      </div>
    </div>
  );
}

export default WelcomeMsg;
