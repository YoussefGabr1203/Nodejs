/**
 * Cookie utility functions for auth token management
 */

const TOKEN_COOKIE_NAME = "token";
const USER_COOKIE_NAME = "user";

// Cookie expiry: 7 days (matching typical JWT expiry)
const COOKIE_MAX_AGE = 7 * 24 * 60 * 60;

/**
 * Set a cookie with the given name and value
 */
export function setCookie(name: string, value: string, maxAge: number = COOKIE_MAX_AGE): void {
  if (typeof document === "undefined") return;

  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

/**
 * Get a cookie value by name
 */
export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

/**
 * Delete a cookie by name
 */
export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;

  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}

/**
 * Set auth token cookie
 */
export function setAuthToken(token: string): void {
  setCookie(TOKEN_COOKIE_NAME, token);
}

/**
 * Get auth token from cookie
 */
export function getAuthToken(): string | null {
  return getCookie(TOKEN_COOKIE_NAME);
}

/**
 * Delete auth token cookie
 */
export function deleteAuthToken(): void {
  deleteCookie(TOKEN_COOKIE_NAME);
}

/**
 * Set user data cookie
 */
export function setUserCookie(user: object): void {
  setCookie(USER_COOKIE_NAME, JSON.stringify(user));
}

/**
 * Get user data from cookie
 */
export function getUserCookie<T>(): T | null {
  const userData = getCookie(USER_COOKIE_NAME);
  if (!userData) return null;

  try {
    return JSON.parse(userData) as T;
  } catch {
    return null;
  }
}

/**
 * Delete user cookie
 */
export function deleteUserCookie(): void {
  deleteCookie(USER_COOKIE_NAME);
}

/**
 * Clear all auth-related cookies and localStorage
 */
export function clearAuthData(): void {
  deleteAuthToken();
  deleteUserCookie();

  // Also clear localStorage for backward compatibility
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}
