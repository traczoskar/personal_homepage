const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  porcelain: "#F2F3F4",
  mercury: "#E5E5E5",
  slateGray: "#6E7E91",
  doveGray: "#6D6D6D",
  tundora: "#414141",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  scienceBlue: "#0366d6",
  blumine: "#1F5189",
  dodgerBlue: "#2188ff",
  shipCove: "#6D93BE",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorMax: 1199,
  },
  boxShadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
};

export const themeLight = {
  ...common,
  colors: {
    basic: colorNames.scienceBlue,
    textBasic: colorNames.mineShaft,
    app: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGray,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      border: colorNames.porcelain,
      borderHover: colorNames.scienceBlue,
      header: colorNames.scienceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    basic: colorNames.dodgerBlue,
    textBasic: colorNames.white,
    app: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.shipCove,
    },
    boxBackground: colorNames.mineShaftLighter,
    headerLine: colorNames.tundora,
    tile: {
      border: colorNames.tundora,
      borderHover: colorNames.blumine,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGray,
      icon: colorNames.mineShaft,
    },
  },
};
