const transition = {
  duration: 1,
  ease: "anticipate"
};

export default {
  imageAnimation: {
    x: ["0%", "-5%", "-5%", "5%", "5%", "0%"],
    y: ["0%", "-5%", "5%", "-5%", "5%", "0%"],
    scale: 1.2,
    transition: {
      ease: "linear",
      duration: 10,
      loop: Infinity,
      scale: {
        ease: "linear",
        duration: 0.5
      }
    }
  },
  slideInFromRight: {
    initial: {
      opacity: 0,
      x: "50%"
    },
    enter: {
      opacity: 1,
      x: "0%",
      transition
    },
    exit: {
      opacity: 0,
      x: "50%",
      transition
    }
  },
  slideInFromLeft: {
    initial: {
      opacity: 0,
      x: "-50%"
    },
    enter: {
      opacity: 1,
      x: "0%",
      transition
    },
    exit: {
      opacity: 0,
      x: "-50%",
      transition
    }
  },
  slideInFromBottom: {
    initial: {
      opacity: 0,
      y: "50%"
    },
    enter: {
      opacity: 1,
      y: "0%",
      transition
    },
    exit: {
      opacity: 0,
      y: "50%",
      transition
    }
  }
};
