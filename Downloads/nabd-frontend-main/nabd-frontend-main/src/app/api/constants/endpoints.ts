export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: "/auth/login",
    REQUEST_PASSWORD_RESET: "/auth/request-password-reset",
    VERIFY_PASSWORD_RESET: "/auth/verify-password-reset",
  },
} as const;

// Helper for building URLs with query params
export const buildUrl = (
  endpoint: string,
  params?: Record<string, unknown>,
): string => {
  if (!params) return endpoint;

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${endpoint}?${queryString}` : endpoint;
};
