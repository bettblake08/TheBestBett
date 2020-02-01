export const transitionPaceReducer = 3;

export const pageOpenTransition = {
  delay: 4 / transitionPaceReducer,
  duration: 3 / transitionPaceReducer,
  ease: [0.5, 1, 1, 0.9]
};

export const pageCloseTransition = {
  delay: 0,
  duration: 3 / transitionPaceReducer,
  delayChildren: 3,
  ease: [0.5, 1, 1, 0.9]
};
