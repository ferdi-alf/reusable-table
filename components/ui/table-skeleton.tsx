/* eslint-disable @typescript-eslint/no-unused-vars */
import { TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

interface TableSkeletonProps {
  columns: number;
  rows?: number;
  hasExpandable?: boolean;
}

export const TableSkeleton = ({
  columns,
  rows = 5,
  hasExpandable = false,
}: TableSkeletonProps) => {
  const columnCount = hasExpandable ? columns + 1 : columns;

  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {hasExpandable && (
            <TableCell className="w-10">
              <Skeleton className="h-4 w-4" />
            </TableCell>
          )}
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton className="h-4 w-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export const ExpandableRowSkeleton = ({ columns }: { columns: number }) => {
  return (
    <TableRow>
      <TableCell colSpan={columns} className="p-4 bg-muted/30">
        <div className="space-y-3">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </TableCell>
    </TableRow>
  );
};
