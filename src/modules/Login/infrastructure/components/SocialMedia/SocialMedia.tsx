import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialMediaProps {
  title: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div className="social-icons">
        <a href="https://www.facebook.com" className="icon" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.google.com" className="icon" target="_blank" rel="noopener noreferrer">
          <FaGoogle />
        </a>
        <a href="https://www.linkedin.com" className="icon" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com" className="icon" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
