// libs
import { Handler } from "@netlify/functions";

// utils
import { fetchHTMLString, getPath, parseHTML, getBaseUrl } from "./utils";

// types
import { TagName } from "./types";

const headers = {
  "Cache-Control": "no-cache, no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
};

const handler: Handler = async (event, context) => {
  try {
    const document = event.queryStringParameters.document || "";
    const variant = event.queryStringParameters.variant || "";

    const url = getBaseUrl(variant);
    const url_from = event.headers.referer ? event.headers.referer : `${url}/`;

    const path = getPath(document, {
      variant,
    });

    const pathTemplate = getPath(document);

    // fetch template html with content
    const htmlContentString = await fetchHTMLString(url + path);
    const htmlContent = parseHTML(htmlContentString, TagName.HTML);
    const content = htmlContent.find(".container").html();

    // fetch template html with style
    const htmlTemplateString = await fetchHTMLString(url_from + pathTemplate);

    switch (event.httpMethod) {
      case "GET":
        const htmlTemplate = parseHTML(htmlTemplateString, TagName.HTML);

        // add content to document
        htmlTemplate.find("#docus-content").append(content);
        const html = `<!DOCTYPE html><html>${htmlTemplate.html()}</html>`;

        return {
          statusCode: 200,
          headers: headers,
          body: html,
        };

      case "POST":
        const htmlTemplatePost = parseHTML(event.body, TagName.HTML);

        // add content to document
        htmlTemplatePost.find("#docus-content").append(content);
        const body = `<!DOCTYPE html><html>${htmlTemplatePost.html()}</html>`;

        return {
          statusCode: 200,
          headers: headers,
          body: body,
        };
      default:
        return {
          statusCode: 401,
          body: "Support only GET | POST method",
          headers: headers,
        };
    }
  } catch (e) {
    throw Error(e);
  }
};

export { handler };
