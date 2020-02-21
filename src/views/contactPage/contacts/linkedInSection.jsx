import React from "react";
import ContactSection from "../contactSection";
import Profile from "../../../me";

const GithubSection = ({ index }) => {
  return (
    <ContactSection {...Profile.socials.linkedin} index={index}>
      <p>Test description</p>
    </ContactSection>
  );
};

export default GithubSection;
