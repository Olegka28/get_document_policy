// types
import { Type } from "../types";

// constants
const BASE_URL_WEB = "https://omo-app.io";
const BASE_URL_LANDING = "https://stay-on-track.io";

export const getBaseUrl = (variant) => {
  if (variant === Type.LANDING) {
    return BASE_URL_LANDING;
  }

  return BASE_URL_WEB;
};
