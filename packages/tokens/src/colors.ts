import { primaryPalette } from "./colors/primary";
import { secondaryPalette } from "./colors/secondary";
import { tertiaryPalette } from "./colors/tertiary";
import { protectionFamilyWealthPalette } from "./colors/protectionFamilyWealth";
import { managementOfFamilyAssetsPalette } from "./colors/managementOfFamilyAssets";

export const colors = {
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
  ...managementOfFamilyAssetsPalette,
};
