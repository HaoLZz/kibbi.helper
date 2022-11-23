/**
 * Determine whether passed value is a valid URL or not
 */
export function isValidURL(str: string) {
  let url;
  try {
    url = new URL(str);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}
