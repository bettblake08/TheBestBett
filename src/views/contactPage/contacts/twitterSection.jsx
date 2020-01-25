import React from "react";
import ContactSection from "../contactSection";
import socials from "../../../utilities/social";

const GithubSection = ({ index }) => {
  return (
    <ContactSection {...socials.twitter} index={index}>
      <p>Test description</p>
    </ContactSection>
  );
};

export default GithubSection;
