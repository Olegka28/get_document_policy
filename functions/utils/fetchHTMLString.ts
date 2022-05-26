// libs
import fetch from "node-fetch";

export const fetchHTMLString = async (url: string) => {
  const responseDocumentWithStyle = await fetch(url);
  return await responseDocumentWithStyle.text();
};
