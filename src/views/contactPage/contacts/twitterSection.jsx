import React from "react";
import ContactSection from "../contactSection";
import Profile from "../../../me";

const GithubSection = ({ index }) => {
  return (
    <ContactSection {...Profile.socials.twitter} index={index}>
    </ContactSection>
  );
};

export default GithubSection;
