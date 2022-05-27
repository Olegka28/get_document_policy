// types
import {
  DocumentPath,
  Document,
  DocumentPathTemplate,
  DocumentPathLanding,
} from "../types";

export const DOCUMENT_MAP_WEB = {
  [Document.REFUND_POLICE]: DocumentPath.REFUND_POLICE,
  [Document.TERMS_OF_USE]: DocumentPath.TERMS_OF_USE,
  [Document.PRIVACY_POLICE]: DocumentPath.PRIVACY_POLICE,
};

export const DOCUMENT_MAP_LANDING = {
  [Document.TERMS_OF_USE]: DocumentPathLanding.TERMS_OF_USE,
  [Document.PRIVACY_POLICE]: DocumentPathLanding.PRIVACY_POLICE,
};

export const DOCUMENT_MAP_TEMPLATE = {
  [Document.REFUND_POLICE]: DocumentPathTemplate.REFUND_POLICE,
  [Document.TERMS_OF_USE]: DocumentPathTemplate.TERMS_OF_USE,
  [Document.PRIVACY_POLICE]: DocumentPathTemplate.PRIVACY_POLICE,
};
