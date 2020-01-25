import React from "react";
import ContactSection from "../contactSection";
import socials from "../../../utilities/social";

export default ({ index }) => {
  return (
    <ContactSection {...socials.github} index={index}>
      <p>Test description</p>
    </ContactSection>
  );
};
