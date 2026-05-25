import { apiClient } from "../client";
import { API_CONFIG } from "../config/apiConfig";
import { API_ENDPOINTS } from "../constants/endpoints";
import {
  LoginRequest,
  LoginResponse,
  RequestPasswordResetRequest,
  RequestPasswordResetResponse,
  VerifyPasswordResetRequest,
  VerifyPasswordResetResponse,
} from "../types/auth.types";

export class AuthApi {
  /**
   * Login user
   */
  static async login(credentials: LoginRequest): Promise<LoginResponse> {
    const response = await apiClient.request<LoginResponse>(
      API_ENDPOINTS.AUTH.LOGIN,
      undefined,
      {
        method: "POST",
        body: JSON.stringify(credentials),
      }
    );

    return response;
  }

  /**
   * Request password reset OTP
   * Note: This endpoint returns raw response (not wrapped in data object)
   */
  static async requestPasswordReset(
    request: RequestPasswordResetRequest
  ): Promise<RequestPasswordResetResponse> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.REQUEST_PASSWORD_RESET}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          ...API_CONFIG.DEFAULT_HEADERS,
        },
        body: JSON.stringify(request),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        // Extract message from { errors: { message, error, statusCode } } format
        if (errorData.errors && errorData.errors.message) {
          throw new Error(errorData.errors.message);
        }
        throw new Error(errorData.message || "Failed to request password reset");
      }

      // Return raw response (not wrapped)
      const data: RequestPasswordResetResponse = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timeout");
      }
      throw error;
    }
  }

  /**
   * Verify password reset OTP
   * Note: This endpoint returns raw response (not wrapped in data object)
   */
  static async verifyPasswordReset(
    request: VerifyPasswordResetRequest
  ): Promise<VerifyPasswordResetResponse> {
    const url = `${API_CONFIG.BASE_URL}${API_ENDPOINTS.AUTH.VERIFY_PASSWORD_RESET}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          ...API_CONFIG.DEFAULT_HEADERS,
        },
        body: JSON.stringify(request),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        // Extract message from { errors: { message, error, statusCode } } format
        if (errorData.errors && errorData.errors.message) {
          throw new Error(errorData.errors.message);
        }
        throw new Error(errorData.message || "Failed to verify password reset");
      }

      // Return raw response (not wrapped)
      const data: VerifyPasswordResetResponse = await response.json();
      return data;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("Request timeout");
      }
      throw error;
    }
  }
}
