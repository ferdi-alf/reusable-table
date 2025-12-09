/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { TableCell } from "@/components/ui/table";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useExpandableQuery } from "@/hooks/useExpandable";
import { ExpandableConfig } from "@/types/table";

interface ExpandableRowProps<TData, TSubData> {
  row: TData;
  rowId: string;
  columns: number;
  config: ExpandableConfig<TData, TSubData>;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ExpandableToggle = <TData extends Record<string, any>, TSubData>({
  row,
  config,
  isExpanded,
  onToggle,
}: Pick<
  ExpandableRowProps<TData, TSubData>,
  "row" | "config" | "isExpanded" | "onToggle"
>) => {
  const shouldShowExpandable = config.condition ? config.condition(row) : true;

  if (!shouldShowExpandable) {
    return <TableCell className="w-10 p-2" />;
  }

  return (
    <TableCell className="w-10 p-2">
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center justify-center w-6 h-6 rounded hover:bg-muted transition-colors",
          isExpanded && "bg-muted"
        )}
        aria-label={isExpanded ? "Collapse row" : "Expand row"}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </button>
    </TableCell>
  );
};

export const ExpandableContent = <TData extends Record<string, any>, TSubData>({
  row,
  rowId,
  columns,
  config,
}: Omit<ExpandableRowProps<TData, TSubData>, "isExpanded" | "onToggle">) => {
  const [subData, setSubData] = useState<TSubData | undefined>();
  const fetchUrl = config.fetchUrl ? config.fetchUrl(row) : null;

  const {
    data: fetchedData,
    isLoading,
    error,
  } = useExpandableQuery<TSubData>(rowId, fetchUrl || "", !!fetchUrl);

  useEffect(() => {
    if (fetchedData) {
      const transformedData = config.transform
        ? config.transform(fetchedData)
        : fetchedData;
      setSubData(transformedData as TSubData);
    }
  }, [fetchedData, config]);

  const errorMessage = error instanceof Error ? error.message : null;

  return (
    <TableCell colSpan={columns + 1} className="p-0 border-t-0">
      <div className="px-4 py-3 bg-muted/30">
        {config.render(subData, row, isLoading, errorMessage)}
      </div>
    </TableCell>
  );
};
