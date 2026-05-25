import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from "@tanstack/react-query";
import { ApiClient } from "./client";

export function useApiQuery<TData>(
  endpoint: string,
  params?: Record<string, string>,
  options?: Omit<UseQueryOptions<TData, Error>, "queryKey" | "queryFn">
) {
  const api = ApiClient.getInstance();

  return useQuery({
    queryKey: [endpoint, params],
    queryFn: () => api.request<TData>(endpoint, params, { method: "GET" }),
    ...options,
  });
}

export function useApiMutation<TData, TVariables>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) {
  const api = ApiClient.getInstance();

  return useMutation({
    mutationFn: (variables: TVariables) =>
      api.request<TData>(endpoint, undefined, {
        method: "POST",
        body: JSON.stringify(variables),
      }),
    ...options,
  });
}
