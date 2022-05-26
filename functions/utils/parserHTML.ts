// libs
import * as cheerio from "cheerio";

// types
import { TagName } from "../types";

export function parseHTML(htmlString: string, tag: TagName) {
  return cheerio.load(htmlString)(tag);
}
