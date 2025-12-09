import { ApiResponse, UseTableDataReturn } from "@/types/table";
import { useQuery } from "@tanstack/react-query";

interface UseTableDataOptions {
  fetchUrl: string;
  page?: number;
  pageSize?: number;
  search?: string;
  enabled?: boolean;
}

export const useTableData = <T>({
  fetchUrl,
  page = 1,
  pageSize = 15,
  search = "",
  enabled = true,
}: UseTableDataOptions): UseTableDataReturn<T> => {
  const buildUrl = () => {
    const url = new URL(fetchUrl, window.location.origin);
    url.searchParams.set("page", page.toString());
    url.searchParams.set("limit", pageSize.toString());

    if (search) {
      url.searchParams.set("search", search);
    }

    return url.toString();
  };

  const { data, isLoading, error, refetch } = useQuery<ApiResponse<T[]>>({
    queryKey: ["table-data", fetchUrl, page, pageSize, search],
    queryFn: async () => {
      const response = await fetch(buildUrl());

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Unknown error occurred");
      }

      return result;
    },
    enabled,
    staleTime: 30000,
    gcTime: 5 * 60 * 1000,
  });

  return {
    data: data?.data || [],
    isLoading,
    error: error?.message || null,
    meta: data?.meta,
    refetch,
  };
};
