export default {
  "page-initial": {
    opacity: 0.5,
    y: "100vh"
  },
  "page-in": {
    opacity: 1,
    y: "0"
  },
  "page-out": {
    opacity: 0.5,
    y: "-100vh"
  },
  "card-in": i => ({
    x: ["12rem", "5rem", "0"],
    y: ["5rem", "4rem", "0"],
    scale: [0.7, 0.8, 1],
    opacity: 1,
    transition: {
      ease: "easeIn"
    }
  }),
  "card-initial": {
    x: "20rem",
    y: "5rem",
    scale: 0.8,
    opacity: 0
  }
};
