import Profile from "me";

import ContactSection from "../contactSection";

const GithubSection = ({ index }) => {
  return (
    <ContactSection {...Profile.socials.github} index={index} /> 
  );
};

export default GithubSection;
