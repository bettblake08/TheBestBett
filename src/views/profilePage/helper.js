import { getPageOffset } from "utils/animationHelpers";

const minWindowOffset = (window.innerHeight * 2) / 3;

export const isSectionInView = (element, scrollY) => {
  if (!element) return;
  const offsets = getPageOffset(element);
  return offsets.top < minWindowOffset && -(element.clientHeight / 3) < offsets.top;
};

export const getSectionVariants = variants => ({
  "page-initial": variants.initial,
  "section-in": variants.enter,
  "section-out": variants.exit
});
