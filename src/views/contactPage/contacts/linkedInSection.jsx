import React from "react";
import ContactSection from "../contactSection";
import image from "../../../assets/images/landing-page.jpg";

const GithubSection = ({ index }) => {
  return (
    <ContactSection
      title="LinkedIn"
      handle="Brian Bett"
      icon="linkedin"
      index={index}
      image={image}
    >
      <p>Test description</p>
    </ContactSection>
  );
};

export default GithubSection;
