const variants = {
  collection: {
    "card-in": {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    },
    "card-initial": {
      opacity: 0
    }
  },
  card: {
    "card-in": i => ({
      scale: 1,
      opacity: 1
    }),
    "card-initial": {
      scale: 0.5,
      opacity: 0
    },
    "card-hover": {
      height: "25rem",
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  },
  cardSelected: {
    "card-in": i => ({
      scale: 1,
      opacity: 1
    }),
    "card-initial": {
      scale: 0.5,
      opacity: 0,
      height: "25rem"
    }
  },
  cardName: {
    "card-initial": {
      opacity: 0,
      y: "-1rem"
    },
    "card-hover": {
      opacity: 1,
      y: 0
    }
  },
  cardNameSelected: {
    "card-initial": {
      opacity: 1
    },
    "card-hover": {
      opacity: 1
    }
  },
  cardImage: {
    "card-hover": {
      x: ["0%", "-5%", "-5%", "5%", "5%"],
      y: ["0%", "-5%", "5%", "-5%", "5%"],
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
    }
  }
};

export default variants;