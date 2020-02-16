export const transition = {
  ease: "anticipate",
  duration: 2
};

export const imageVariants = {
  container: {
    "page-initial": {
      opacity: 0,
      x: "-50%"
    },
    "page-in": {
      opacity: 1,
      x: ["0%", "-5%", "-5%", "5%", "5%", "0%"],
      y: ["0%", "-5%", "5%", "-5%", "5%", "0%"],
      transition: {
        ease: "linear",
        duration: 10,
        loop: Infinity,
        scale: {
          ease: "linear",
          duration: 0.5
        },
        opacity: {
          ease: "linear",
          duration: 1
        }
      }
    },
    "page-out": {
      opacity: 0,
      x: "-50%"
    },
    "hover": {
      scale: 1.2
    },
    transition
  }
};

export const textSlideInLeftVariants = {
  "page-initial": {
    opacity: 0,
    x: "-50%"
  },
  "page-in": {
    opacity: 1,
    x: "0%"
  },
  "page-out": {
    opacity: 0,
    x: "-50%"
  },
  "section-in": {
    opacity: 1,
    x: "0%"
  },
  "section-out": {
    opacity: 0,
    x: "-50%"
  },
  transition
};

let textSlideInRightVariants = textSlideInLeftVariants;
textSlideInRightVariants["page-initial"].x = "50%";
textSlideInRightVariants["page-out"].x = "50%";
textSlideInRightVariants["section-out"].x = "50%";

export const textSlideInUpVariants = {
  "page-initial": {
    opacity: 0,
    y: "50%"
  },
  "page-in": {
    opacity: 1,
    y: "0%"
  },
  "page-out": {
    opacity: 0,
    y: "50%"
  },
  "section-in": {
    opacity: 1,
    y: "0%"
  },
  "section-out": {
    opacity: 0,
    y: "50%"
  },
  transition
};

export const letterVariants = {
  "page-initial": {},
  "page-in": {},
  "page-out": {},
  hover: {
    scale: 1.2,
    paddingLeft: "20px",
    paddingRight: "20px"
  }
};

export {
  textSlideInRightVariants
};
