import { apiClient } from "../client";
import { API_ENDPOINTS } from "../constants/endpoints";
import {
  ApiResponseWrapper,
  Organization,
  RegistrationRequest,
  RegistrationRequestResponse,
} from "../types/api.types";

export class GeneralApi {
  static async getRegistrationRequests(
    request: RegistrationRequest
  ): Promise<ApiResponseWrapper<RegistrationRequestResponse>> {
    const response = await apiClient.requestFull<RegistrationRequestResponse>(
      API_ENDPOINTS.GENERAL.GET_REGISTRATION_REQUESTS,
      undefined,
      { method: "POST", body: JSON.stringify(request) }
    );
    return response;
  }
  static async getOrganizationsDropdown(): Promise<
    ApiResponseWrapper<Organization[]>
  > {
    const response = await apiClient.requestFull<Organization[]>(
      API_ENDPOINTS.GENERAL.ORGANIZATIONS_DROPDOWN,
      undefined,
      { method: "GET" }
    );
    return response;
  }
}
