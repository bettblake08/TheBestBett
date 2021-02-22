import Profile from "me";

import ContactSection from "../contactSection";

const FacebookSection = ({ index }) => {
  return (
    <ContactSection {...Profile.socials.facebook} index={index} />
  );
};

export default FacebookSection;
