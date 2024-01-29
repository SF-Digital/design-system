"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes,
  fontWeights: () => fontWeights,
  fonts: () => fonts,
  lineHeights: () => lineHeights,
  radii: () => radii,
  space: () => space
});
module.exports = __toCommonJS(src_exports);

// src/colors/primary.ts
var primaryPalette = {
  "primary-green": {
    50: "#e6efeb",
    100: "#b0cec1",
    200: "#8ab7a3",
    300: "#549679",
    400: "#33815f",
    500: "#006237",
    600: "#005932",
    700: "#004627",
    800: "#00361e",
    900: "#002917"
  },
  "primary-black": {
    50: "#e6e6e6",
    100: "#b0b0b0",
    200: "#8a8a8a",
    300: "#545454",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000"
  },
  "primary-grey": {
    50: "#e9e9e9",
    100: "#b9b9b9",
    200: "#989898",
    300: "#686868",
    400: "#4b4b4b",
    500: "#1e1e1e",
    600: "#1b1b1b",
    700: "#151515",
    800: "#111111",
    900: "#0d0d0d"
  },
  error: {
    50: "#feeceb",
    100: "#fac5c1",
    200: "#f8a9a3",
    300: "#f5827a",
    400: "#f36960",
    500: "#f04438",
    600: "#da3e33",
    700: "#aa3028",
    800: "#84251f",
    900: "#651d18"
  },
  warning: {
    50: "#fef4e6",
    100: "#fdddb3",
    200: "#fbcc8e",
    300: "#fab55a",
    400: "#f9a63a",
    500: "#f79009",
    600: "#e18308",
    700: "#af6606",
    800: "#884f05",
    900: "#683c04"
  },
  success: {
    50: "#e7f8f0",
    100: "#b6e9d1",
    200: "#92deba",
    300: "#60cf9b",
    400: "#41c588",
    500: "#12b76a",
    600: "#10a760",
    700: "#0d824b",
    800: "#0a653a",
    900: "#084d2d"
  },
  neutral: {
    0: "#ffffff",
    10: "#fbfbfb",
    20: "#f6f6f6",
    30: "#eeeeee",
    40: "#e3e3e3",
    50: "#cacaca",
    60: "#bdbdbd",
    70: "#b2b2b2",
    80: "#a5a5a5",
    90: "#989898",
    100: "#8b8b8b",
    200: "#7f7f7f",
    300: "#727272",
    400: "#676767",
    500: "#5a5a5a",
    600: "#505050",
    700: "#414141",
    800: "#343434",
    900: "#292929"
  }
};

// src/colors/secondary.ts
var secondaryPalette = {
  "secondary-green": {
    50: "#e6efeb",
    100: "#b0cec1",
    200: "#8ab7a3",
    300: "#549679",
    400: "#33815f",
    500: "#006237",
    600: "#005932",
    700: "#004627",
    800: "#00361e",
    900: "#002917"
  },
  "secondary-brown": {
    50: "#f7f5f3",
    100: "#e5e1da",
    200: "#d9d2c9",
    300: "#c7bdb0",
    400: "#bdb1a1",
    500: "#ac9d89",
    600: "#9d8f7d",
    700: "#7a6f61",
    800: "#5f564b",
    900: "#48423a"
  },
  "secondary-blue": {
    50: "#eaf0f4",
    100: "#bfd2dc",
    200: "#a0bccb",
    300: "#759db3",
    400: "#5a8aa5",
    500: "#316d8e",
    600: "#2d6381",
    700: "#234d65",
    800: "#1b3c4e",
    900: "#152e3c"
  },
  "secondary-pink": {
    50: "#f4eef3",
    100: "#ddcbd9",
    200: "#ccb2c7",
    300: "#b58fad",
    400: "#a6799d",
    500: "#905885",
    600: "#835079",
    700: "#663e5e",
    800: "#4f3049",
    900: "#3c2538"
  },
  "secondary-light-green": {
    50: "#f4f8ef",
    100: "#deeace",
    200: "#cde0b6",
    300: "#b7d295",
    400: "#a9c981",
    500: "#93bc61",
    600: "#86ab58",
    700: "#688545",
    800: "#516735",
    900: "#3e4f29"
  },
  "secondary-light-blue": {
    50: "#f1fafb",
    100: "#d3eef1",
    200: "#bee6eb",
    300: "#a1dae2",
    400: "#8ed3dc",
    500: "#72c8d3",
    600: "#68b6c0",
    700: "#518e96",
    800: "#3f6e74",
    900: "#305459"
  }
};

// src/colors/tertiary.ts
var tertiaryPalette = {
  "tertiary-green": {
    50: "#ecf3f0",
    100: "#c4d9cf",
    200: "#a8c6b8",
    300: "#80ad98",
    400: "#689d84",
    500: "#428465",
    600: "#3c785c",
    700: "#2f5e48",
    800: "#244938",
    900: "#1c372a"
  },
  "tertiary-beige": {
    50: "#f8f7f5",
    100: "#e8e5e1",
    200: "#ddd8d2",
    300: "#cec7bd",
    400: "#c5bcb1",
    500: "#b6ab9d",
    600: "#a69c8f",
    700: "#81796f",
    800: "#645e56",
    900: "#4c4842"
  },
  "tertiary-blue": {
    50: "#f0f4f6",
    100: "#d2dbe4",
    200: "#bccad7",
    300: "#9db2c4",
    400: "#8aa3b9",
    500: "#6d8ca7",
    600: "#637f98",
    700: "#4d6377",
    800: "#3c4d5c",
    900: "#2e3b46"
  },
  "tertiary-light-green": {
    50: "#f7faf4",
    100: "#e5f0de",
    200: "#d9e8ce",
    300: "#c7deb8",
    400: "#bdd8aa",
    500: "#acce95",
    600: "#9dbb88",
    700: "#7a926a",
    800: "#5f7152",
    900: "#48573f"
  },
  "tertiary-light-blue": {
    50: "#f1fafb",
    100: "#d3eef1",
    200: "#bee6eb",
    300: "#a1dae2",
    400: "#8ed3dc",
    500: "#72c8d3",
    600: "#68b6c0",
    700: "#518e96",
    800: "#3f6e74",
    900: "#305459"
  },
  "tertiary-purple": {
    50: "#f6f2f5",
    100: "#e2d7e1",
    200: "#d4c4d3",
    300: "#c0a9bf",
    400: "#b498b2",
    500: "#a17e9f",
    600: "#937391",
    700: "#725971",
    800: "#594557",
    900: "#443543"
  },
  "tertiary-orange": {
    50: "#fef5eb",
    100: "#fddfc1",
    200: "#fcd0a3",
    300: "#fabb7a",
    400: "#f9ad60",
    500: "#f89938",
    600: "#e28b33",
    700: "#b06d28",
    800: "#88541f",
    900: "#684018"
  },
  "tertiary-brown": {
    50: "#f5f0eb",
    100: "#dfd0bf",
    200: "#d0b9a1",
    300: "#bb9876",
    400: "#ad855b",
    500: "#996632",
    600: "#8b5d2e",
    700: "#6d4824",
    800: "#54381c",
    900: "#402b15"
  },
  "tertiary-grey": {
    50: "#f0f0f1",
    100: "#d1d2d2",
    200: "#babcbd",
    300: "#9b9d9f",
    400: "#878a8c",
    500: "#696d6f",
    600: "#606365",
    700: "#4b4d4f",
    800: "#3a3c3d",
    900: "#2c2e2f"
  },
  "tertiary-light-orange": {
    50: "#fffaf5",
    100: "#feefe0",
    200: "#fee8d1",
    300: "#feddbb",
    400: "#fdd6ae",
    500: "#fdcc9a",
    600: "#e6ba8c",
    700: "#b4916d",
    800: "#8b7055",
    900: "#6a5641"
  },
  "tertiary-light-brown": {
    50: "#faf7f5",
    100: "#efe7df",
    200: "#e8dcd0",
    300: "#ddcbbb",
    400: "#d6c1ad",
    500: "#ccb299",
    600: "#baa28b",
    700: "#917e6d",
    800: "#706254",
    900: "#564b40"
  },
  "tertiary-light-grey": {
    50: "#f7f7f7",
    100: "#e6e6e6",
    200: "#d9dada",
    300: "#c8c9c9",
    400: "#bdbfbf",
    500: "#adafaf",
    600: "#9d9f9f",
    700: "#7b7c7c",
    800: "#5f6060",
    900: "#494a4a"
  }
};

// src/colors/protectionFamilyWealth.ts
var protectionFamilyWealthPalette = {
  "succession-blue": {
    50: "#f3f7f8",
    100: "#d9e5ea",
    200: "#c6d8e0",
    300: "#adc6d2",
    400: "#9dbbc9",
    500: "#84aabc",
    600: "#789bab",
    700: "#5e7985",
    800: "#495e67",
    900: "#37474f"
  },
  "family-blue": {
    50: "#f3f9fb",
    100: "#d8edf1",
    200: "#c6e4ea",
    300: "#abd8e1",
    400: "#9bd1db",
    500: "#82c5d2",
    600: "#76b3bf",
    700: "#5c8c95",
    800: "#486c74",
    900: "#375358"
  },
  "legal-tax-purple": {
    50: "#f6eff4",
    100: "#e2cddd",
    200: "#d5b5cc",
    300: "#c194b5",
    400: "#b57fa6",
    500: "#a35f90",
    600: "#945683",
    700: "#744366",
    800: "#5a344f",
    900: "#44283c"
  },
  "expert-fiduciary-grey": {
    50: "#f4f4f4",
    100: "#dcdcdc",
    200: "#cbcbcb",
    300: "#b4b3b3",
    400: "#a5a4a4",
    500: "#8f8d8d",
    600: "#828080",
    700: "#666464",
    800: "#4f4e4e",
    900: "#3c3b3b"
  },
  "family-business-blue": {
    50: "#eaf1f4",
    100: "#bdd2dd",
    200: "#9dbdcc",
    300: "#719fb5",
    400: "#558ca7",
    500: "#2b6f91",
    600: "#276584",
    700: "#1f4f67",
    800: "#183d50",
    900: "#122f3d"
  },
  "wealth-green": {
    50: "#f3f8f0",
    100: "#dbe9d0",
    200: "#cadeba",
    300: "#b1cf9a",
    400: "#a2c586",
    500: "#8bb768",
    600: "#7ea75f",
    700: "#63824a",
    800: "#4c6539",
    900: "#3a4d2c"
  },
  "insurance-brown": {
    50: "#f5f3f1",
    100: "#dfdad4",
    200: "#d0c8bf",
    300: "#baafa2",
    400: "#ada090",
    500: "#988874",
    600: "#8a7c6a",
    700: "#6c6152",
    800: "#544b40",
    900: "#403931"
  },
  "philanthropy-green": {
    50: "#fafbf0",
    100: "#f0f4d2",
    200: "#e9eebc",
    300: "#dfe79d",
    400: "#d9e28a",
    500: "#cfdb6d",
    600: "#bcc763",
    700: "#939b4d",
    800: "#72783c",
    900: "#575c2e"
  }
};

// src/colors/managementOfFamilyAssets.ts
var managementOfFamilyAssetsPalette = {
  "investment-green": {
    50: "#f0f4f1",
    100: "#d1ddd3",
    200: "#baccbe",
    300: "#9bb5a0",
    400: "#88a68d",
    500: "#6a9071",
    600: "#608367",
    700: "#4b6650",
    800: "#3a4f3e",
    900: "#2d3c2f"
  },
  "private-blue": {
    50: "#e9f2f4",
    100: "#bcd6dd",
    200: "#9cc2cc",
    300: "#6ea7b5",
    400: "#5295a7",
    500: "#277b91",
    600: "#237084",
    700: "#1c5767",
    800: "#154450",
    900: "#10343d"
  },
  "dealing-purple": {
    50: "#f1ebef",
    100: "#d2c0ce",
    200: "#bca2b6",
    300: "#9e7894",
    400: "#8b5d80",
    500: "#6e3560",
    600: "#643057",
    700: "#4e2644",
    800: "#3d1d35",
    900: "#2e1628"
  },
  "expert-reporting-beige": {
    50: "#f9f8f2",
    100: "#ede8d6",
    200: "#e4ddc2",
    300: "#d8cda7",
    400: "#d1c495",
    500: "#c5b57b",
    600: "#b3a570",
    700: "#8c8157",
    800: "#6c6444",
    900: "#534c34"
  },
  "corporate-finance-blue": {
    50: "#e6ecf1",
    100: "#b0c3d2",
    200: "#8aa6bc",
    300: "#547e9e",
    400: "#33658b",
    500: "#003e6e",
    600: "#003864",
    700: "#002c4e",
    800: "#00223d",
    900: "#001a2e"
  },
  "corporate-services-orange": {
    50: "#fcf4ed",
    100: "#f6dbc8",
    200: "#f1caae",
    300: "#ebb289",
    400: "#e7a372",
    500: "#e18c4f",
    600: "#cd7f48",
    700: "#a06338",
    800: "#7c4d2b",
    900: "#5f3b21"
  },
  "art-management-red": {
    50: "#f3eaeb",
    100: "#d8bfc0",
    200: "#c6a0a2",
    300: "#ab7478",
    400: "#9b595d",
    500: "#823035",
    600: "#762c30",
    700: "#5c2226",
    800: "#481a1d",
    900: "#371416"
  },
  "property-advisory-red": {
    50: "#f8eceb",
    100: "#e8c4c0",
    200: "#dda7a2",
    300: "#cd7f77",
    400: "#c3665d",
    500: "#b44034",
    600: "#a43a2f",
    700: "#802d25",
    800: "#63231d",
    900: "#4c1b16"
  }
};

// src/colors.ts
var colors = {
  // TODO: should we keep these or remove them?
  // white: "#FFF",
  // black: "#000",
  // gray100: "#E1E1E6",
  // gray200: "#A9A9B2",
  // gray400: "#7C7C8A",
  // gray500: "#505059",
  // gray600: "#323238",
  // gray700: "#29292E",
  // gray800: "#202024",
  // gray900: "#121214",
  // primary300: "#00B37E",
  // primary500: "#00875F",
  // primary700: "#015F43",
  // primary900: "#00291D",
  ...primaryPalette,
  ...secondaryPalette,
  ...tertiaryPalette,
  ...protectionFamilyWealthPalette,
  ...managementOfFamilyAssetsPalette
};

// src/space.ts
var space = {
  1: "0.25rem",
  // 4px
  2: "0.5rem",
  // 8px
  3: "0.75rem",
  // 12px
  4: "1rem",
  // 16px
  5: "1.25rem",
  // 20px
  6: "1.5rem",
  // 24px
  8: "2rem",
  // 32px
  10: "2.5rem",
  // 40px
  12: "3rem",
  // 48px
  16: "4rem",
  // 64px
  20: "5rem",
  // 80px
  24: "6rem",
  // 96px
  32: "8rem",
  // 128px
  40: "10rem",
  // 160px
  48: "12rem",
  // 192px
  56: "14rem",
  // 224px
  64: "16rem"
  // 256px
};

// src/radii.ts
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/fonts.ts
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace",
  "sf-heading": "Gill, sans-serif",
  "sf-body": "Perpetua, serif"
};

// src/font-sizes.ts
var fontSizes = {
  // TODO: should we keept these or remove them?
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem",
  "xs-sf": "0.8125rem",
  "sm-sf": "0.875rem",
  "md-sf": "1rem",
  "lg-sf": "1.125rem",
  "h1-sf": "2.25rem",
  "h2-sf": "2rem",
  "h3-sf": "1.8125rem",
  "h4-sf": "1.625rem",
  "h5-sf": "1.4375rem",
  "h6-sf": "1.25rem"
};

// src/font-weights.ts
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};

// src/line-heights.ts
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space
});
