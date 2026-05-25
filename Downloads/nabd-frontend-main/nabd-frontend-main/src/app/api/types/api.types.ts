// Authentication Types
import {
  EnrollmentStatus,
  Gender,
  LearnerRole,
  ResidencyStatus,
} from "./api.enums";

export interface ApiResponseWrapper<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface ApiPaginatedResponseWrapper<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  message?: string;
  success?: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface User {
  id: number;
  organizationId: number;
  email: string;
  username: string;
  fullName: string;
  role: LearnerRole;
  gender: Gender;
  dateOfBirth: string;
  location: string;
  nationality: string;
  residencyStatus: ResidencyStatus;
  hasDisability: boolean;
}

export interface RegistrationRequest {
  fullName: string;
  email: string;
  gender: Gender;
  dateOfBirth: string;
  location: string;
  nationality: string;
  residencyStatus: ResidencyStatus;
  hasDisability: boolean;
  organizationId: number;
}

export interface RegistrationRequestResponse {
  id: number;
  fullName: string;
  email: string;
  gender: Gender;
  dateOfBirth: string;
  location: string;
  nationality: string;
  residencyStatus: ResidencyStatus;
  hasDisability: boolean;
  organizationId: number;
  reason: string | null;
  requestedAt: string;
  status: EnrollmentStatus;
}

export interface Organization {
  id: number;
  name: string;
}
