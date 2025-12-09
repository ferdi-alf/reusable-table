import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { UseExpandableReturn } from "@/types/table";

export const useExpandable = <T>(): UseExpandableReturn<T> => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  const toggleRow = useCallback((rowId: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(rowId)) {
        newSet.delete(rowId);
      } else {
        newSet.add(rowId);
      }
      return newSet;
    });
  }, []);

  const fetchSubData = useCallback(
    async (rowId: string, url: string): Promise<T> => {
      throw new Error("Use useExpandableQuery instead");
    },
    []
  );

  return {
    expandedRows,
    toggleRow,
    fetchSubData,
    subDataCache: new Map(),
    loadingStates: new Map(),
    errorStates: new Map(),
  };
};

export const useExpandableQuery = <T>(
  rowId: string,
  url: string,
  enabled: boolean
) => {
  return useQuery<T>({
    queryKey: ["expandable-data", rowId, url],
    queryFn: async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || "Unknown error occurred");
      }

      return result.data;
    },
    enabled,
    staleTime: 60000,
    gcTime: 10 * 60 * 1000,
  });
};
