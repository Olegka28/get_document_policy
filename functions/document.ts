// libs
import { Handler } from "@netlify/functions";

// utils
import { fetchHTMLString, parseHTML } from "./utils";

// constants
import { DOCUMENT_MAP } from "./constants";

// types
import { TagName } from "./types";

const BASE_URL = "https://get-on-track.io";

const handler: Handler = async (event, context) => {
  const path = event.queryStringParameters.document
    ? DOCUMENT_MAP[event.queryStringParameters.document]
    : DOCUMENT_MAP.terms;

  const url = event.queryStringParameters.from
    ? event.queryStringParameters.from
    : BASE_URL;

  // fetch base html
  const htmlString = await fetchHTMLString(BASE_URL + path);

  const html = parseHTML(htmlString, TagName.HTML);
  html.find(TagName.STYLE).replaceWith("");

  // fetch html with style
  const htmlStringWithStyle = await fetchHTMLString(url + DOCUMENT_MAP.terms);

  const style = parseHTML(htmlStringWithStyle, TagName.STYLE).html();
  const styleTag = `<style type="text/css">${style}</style>`;

  // add style to document
  html.find(TagName.HEAD).append(styleTag);
  const data = html.html();

  // if (html || html.html()) {
  //   return {
  //     statusCode: 403,
  //   };
  // }

  return {
    statusCode: 200,
    body: data,
  };
};

export { handler };
