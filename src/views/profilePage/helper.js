import { getPageOffset } from "../../utilities/animationHelpers";

export const isSectionInView = (element, scrollY) => {
  if (!element) return;
  const offsets = getPageOffset(element);
  console.log(scrollY);
  return offsets.top > 0 && scrollY + 150 > offsets.top;
};

export const getSectionVariants = variants => ({
  "page-initial": variants.initial,
  "section-in": variants.enter,
  "section-out": variants.exit
});

