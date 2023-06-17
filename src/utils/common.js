import { readingStatus } from "./types";

export function getHumanReadableShelf(heading) {
  let result;
  // eslint-disable-next-line default-case
  switch (heading) {
    case readingStatus["HAVE_READ"]: {
      result = "Already Read";
      break;
    }
    case readingStatus["READING"]: {
      result = "Currently Reading";
      break;
    }
    case readingStatus["WANT_TO_READ"]: {
      result = "Want To Read";
      break;
    }
    case readingStatus["NONE"]: {
      result = "none";
      break;
    }
  }
  return result;
}
