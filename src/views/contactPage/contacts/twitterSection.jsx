import Profile from "me";

import ContactSection from "../contactSection";

const TwitterSection = ({ index }) => {
  return (
    <ContactSection {...Profile.socials.twitter} index={index} />
  );
};

export default TwitterSection;
