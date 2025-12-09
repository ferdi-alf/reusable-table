import { Search as SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  containerClassName?: string;
}

const Search = ({
  onSearch,
  containerClassName,
  className,
  placeholder = "Search...",
  ...props
}: SearchProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch?.(e.target.value);
    props.onChange?.(e);
  };

  return (
    <div className={cn("relative", containerClassName)}>
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className={cn("pl-9", className)}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default Search;
