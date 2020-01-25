import React from "react";
import { motion } from "framer-motion";
import contactPageContext from "./contactPageContext";

const ContactSection = ({ title, index, handle, icon, image, children }) => {
  return (
    <contactPageContext.Consumer>
      {value => {
        const isSelected = value.selectedContact === title;

        return (
          <div
            className={`contact-section${isSelected ? "--selected" : ""}`}
            onClick={() => value.setSelectedContact(isSelected ? null : title)}
          >
            <div className="contact-section__image">
              <span className="contact-section__fade" />
              <img src={image} alt={`${title} background`} />
            </div>
            <div className="contact-section__details">
              <div className="contact-section__number">{`0${index}`}</div>
              <div className="contact-section__icon">
                <motion.svg
                  animate={{ rotate: 360 }}
                  transition={{ ease: "linear", duration: 60, loop: Infinity }}
                >
                  <circle
                    stroke-width="1"
                    fill="transparent"
                    r="58"
                    cx="60"
                    cy="60"
                  />
                </motion.svg>
                <i className={`fab fa-${icon} fa-4x`}></i>
              </div>
              <h1 className="contact-section__title">{title}</h1>
              <h3 className="contact-section__handle">{handle}</h3>
              {isSelected ? (
                <div className="contact-section__body">{children}</div>
              ) : null}
            </div>
          </div>
        );
      }}
    </contactPageContext.Consumer>
  );
};

export default ContactSection;
