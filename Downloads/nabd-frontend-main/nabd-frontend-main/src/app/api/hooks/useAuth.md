import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "../endpoints/auth";
import {
  LoginRequest,
  LoginResponse,
  RequestPasswordResetRequest,
  RequestPasswordResetResponse,
  VerifyPasswordResetRequest,
  VerifyPasswordResetResponse,
} from "../types/auth.types";
import { setAuthToken, setUserCookie } from "@/modules/shared/utils/cookies";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (credentials: LoginRequest) => AuthApi.login(credentials),
    onSuccess: (data) => {
      if (data.token) {
        const user = {
          id: data.id,
          organizationId: data.organizationId,
          email: data.email,
          username: data.username,
          fullName: data.fullName,
          role: data.role,
          gender: data.gender,
          dateOfBirth: data.dateOfBirth,
          location: data.location,
          nationality: data.nationality,
          residencyStatus: data.residencyStatus,
          hasDisability: data.hasDisability,
        };

        // Store in cookies for middleware access
        setAuthToken(data.token);
        setUserCookie(user);

        // Also store in localStorage for backward compatibility
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    },
  });
};

/**
 * Hook for requesting password reset OTP
 */
export const useRequestPasswordReset = () => {
  return useMutation<
    RequestPasswordResetResponse,
    Error,
    RequestPasswordResetRequest
  >({
    mutationFn: (request: RequestPasswordResetRequest) =>
      AuthApi.requestPasswordReset(request),
  });
};

/**
 * Hook for verifying password reset OTP
 */
export const useVerifyPasswordReset = () => {
  return useMutation<
    VerifyPasswordResetResponse,
    Error,
    VerifyPasswordResetRequest
  >({
    mutationFn: (request: VerifyPasswordResetRequest) =>
      AuthApi.verifyPasswordReset(request),
  });
};
