import { User } from "./api.types";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse extends User {
  token: string;
  passwordHash: string;
}

// Password Reset Types
export interface RequestPasswordResetRequest {
  email: string;
}

export interface RequestPasswordResetResponse {
  message: string;
  token: string;
}

export interface VerifyPasswordResetRequest {
  token: string;
  otp: string;
}

export interface VerifyPasswordResetResponse {
  message: string;
}
