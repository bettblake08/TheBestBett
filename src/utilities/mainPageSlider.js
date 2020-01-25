import pageVariants from "./pageVariants";

export default {
  className: "landing-page",
  initial: "page-initial",
  animate: "page-in",
  exit: "page-out",
  variants: pageVariants,
  transition: {
    duration: 1,
    ease: "anticipate"
  },
  style: {
    position: "absolute"
  }
};
