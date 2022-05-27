// constant
import {
  DOCUMENT_MAP_TEMPLATE,
  DOCUMENT_MAP_LANDING,
  DOCUMENT_MAP_WEB,
} from "../constants";

const defaultOption = {
  variant: "",
};

export const getPath = (document: string, option = defaultOption) => {
  if (document) {
    if (option.variant === "web") {
      return DOCUMENT_MAP_WEB[document];
    }
    if (option.variant === "landing") {
      return DOCUMENT_MAP_LANDING[document];
    }
    return DOCUMENT_MAP_TEMPLATE[document];
  }
  return DOCUMENT_MAP_TEMPLATE.terms;
};
