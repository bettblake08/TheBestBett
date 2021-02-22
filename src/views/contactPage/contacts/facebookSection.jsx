import Profile from "me";

import ContactSection from "../contactSection";

export default ({ index }) => {
  return (
    <ContactSection {...Profile.socials.facebook} index={index} />
  );
};
