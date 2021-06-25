import { useState, useEffect } from "react";

import SlidingPage from "components/slidingPage";
import { setPageTitle } from "utils/helpers";

import GitHub from "./contacts/githubSection";
import Facebook from "./contacts/facebookSection";
import Twitter from "./contacts/twitterSection";
import LinkedIn from "./contacts/linkedInSection";
import ContactPageContext from "./contactPageContext";

import "./contactPage.scss";

const ContactPage = () => {
  const [store, setStore] = useState({ selectedContact: null });

  const setSelectedContact = selectedContact => setStore({ ...store, selectedContact });

  useEffect(() => {
    setPageTitle("Contact");
  }, []);

  return (
    <ContactPageContext.Provider value={{ ...store, setSelectedContact }}>
      <SlidingPage
        className={`contact-page ${
          store.selectedContact ? "contact-page--selected" : ""
        }`}
      >
        <div className="contact-page__header"></div>
        <div className="contact-page__contacts">
          <Facebook index={1} />
          <LinkedIn index={2} />
          <GitHub index={3} />
          <Twitter index={4} />
        </div>
      </SlidingPage>
    </ContactPageContext.Provider>
  );
};

export default ContactPage;
