import { Dimensions } from "react-native";

export const { width } = Dimensions.get("screen");

export const _ImageWidth = width * 0.7;
export const _ImageHeight = _ImageWidth * 1.76;
export const _spacing = 12;

export const url =
  "https://api.pexels.com/v1/search?query=mobile wallpaper&orientation=portrait";
