import React from "react";
import ContactSection from "../contactSection";
import image from "../../../assets/images/landing-page.jpg";

const GithubSection = ({ index }) => {
  return (
    <ContactSection
      title="Facebook"
      handle="bett.blake.bryan"
      icon="facebook"
      index={index}
      image={image}
    >
      <p>Test description</p>
    </ContactSection>
  );
};

export default GithubSection;
