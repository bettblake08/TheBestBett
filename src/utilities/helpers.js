export const isScreenMobile = () => window.screen.width < 600;

export const isScreenLandscapeTab = () =>
  window.screen.width >= 600 && window.screen.width < 900;

export const setPageTitle = title =>
  (document.title = `TheBestBett | ${title}`);

export default {
  isScreenMobile,
  isScreenLandscapeTab,
  setPageTitle
};
