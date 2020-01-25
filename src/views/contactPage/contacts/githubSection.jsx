import React from "react";
import ContactSection from "../contactSection";
import image from "../../../assets/images/landing-page.jpg";

const GithubSection = ({ index }) => {
  return (
    <ContactSection
      title="GitHub"
      handle="@bettblake08"
      icon="github"
      index={index}
      image={image}
    >
      <p>Test description</p>
    </ContactSection>
  );
};

export default GithubSection;
