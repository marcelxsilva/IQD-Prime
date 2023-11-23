import { pxToRem } from '~/utils';

export default {
  sceneSpacing: pxToRem(24),
  sectionSpacing: pxToRem(40),
  minimumSpacing: pxToRem(4),
  smallSpacing: pxToRem(12),
  mediumSpacing: pxToRem(20),
  largeSpacing: pxToRem(24),
  giantSpacing: pxToRem(72),
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
} as Spacings;
