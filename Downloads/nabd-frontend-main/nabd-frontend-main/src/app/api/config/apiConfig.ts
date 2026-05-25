import { getAuthToken } from "@/modules/shared/utils/cookies";

export const API_CONFIG = {
  BASE_URL:process.env.NEXT_PUBLIC_API_URL,
  DEFAULT_HEADERS: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
  TIMEOUT: 30000,
  // Add authentication header when token is available
  getAuthHeaders: () => {
    // Try cookie first, fallback to localStorage for backward compatibility
    const token =
      typeof window !== "undefined"
        ? getAuthToken() || localStorage.getItem("token")
        : null;
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};

export type ApiError = {
  message: string;
  status: number;
  details?: unknown;
};
