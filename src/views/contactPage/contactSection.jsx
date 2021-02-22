import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Button from "components/button";

import contactPageContext from "./contactPageContext";

const ringVariants = {
  "rotate-loop": {
    rotate: 360,
    transition: {
      ease: "linear",
      duration: 15,
      loop: Infinity
    }
  }
};

const ContactSection = ({
  title,
  index,
  handle,
  icon,
  image,
  url,
  children
}) => {
  const [components, setComponents] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (components.contactButton) {
      components.contactButton.setStatus(isSelected ? "normal" : "icon-only");
    }
  });

  return (
    <contactPageContext.Consumer>
      {value => {
        setIsSelected(value.selectedContact === title);
        return (
          <div className={`contact-section${isSelected ? "--selected" : ""}`}>
            <div
              className="contact-section__image"
              onClick={() =>
                value.setSelectedContact(isSelected ? null : title)
              }
            >
              <span className="contact-section__fade" />
              <img src={image} alt={`${title} background`} />
            </div>

            <div className="contact-section__details">
              <div className="contact-section__number font--normal">{`0${index}`}</div>
              <div className="contact-section__icon">
                <motion.svg animate="rotate-loop" variants={ringVariants}>
                  <circle
                    strokeWidth="1"
                    fill="transparent"
                    r="58"
                    cx="60"
                    cy="60"
                  />
                </motion.svg>
                <i className={`fab fa-${icon} fa-4x`}></i>
              </div>
              <h1 className="contact-section__title font--header">{title}</h1>
              <h3 className="contact-section__handle font--header--3">{handle}</h3>
              {isSelected ? (
                <div className="contact-section__body">{children}</div>
              ) : null}
            </div>

            <div className="contact-section__button">
              <Button
                defaultStatus={7}
                parent={{ components, setComponents }}
                name="contactButton"
                config={{
                  icon: "arrow-right",
                  label: "Check me out",
                  action: () => window.open(url, '_blank'),
                  reverse: true
                }}
              />
            </div>
          </div>
        );
      }}
    </contactPageContext.Consumer>
  );
};

export default ContactSection;
