export function isInBrowser(): boolean {
  return typeof window !== "undefined"
}

/**
 * Get the current host, including the protocol, origin and port (if any).
 *
 * Does **not** end with a trailing "/".
 */
export function getHost() {
  return location.protocol + "//" + location.host
}

export function isReferrerSameHost(): boolean {
  if (!isInBrowser()) {
    return false
  }
  const referrer = document.referrer || ""
  const host = getHost()

  return referrer.substr(0, host.length) === host
}

export function isInIframe() {
  try {
    return window.self !== window.top
  } catch (e) {
    return true
  }
}
