import Profile from "me";

import ContactSection from "../contactSection";

const LinkedInSection = ({ index }) => {
  return (
    <ContactSection {...Profile.socials.linkedin} index={index} />
  );
};

export default LinkedInSection;
