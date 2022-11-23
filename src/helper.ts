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

/**
 * Write text into clipboard
 */
export async function writeToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
