// libs
import fetch from "node-fetch";

export const fetchHTMLString = async (url: string) => {
  const responseDocumentWithStyle = await fetch(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
  return await responseDocumentWithStyle.text();
};
