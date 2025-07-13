// libraries
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
// components
import type { FilterProps } from "@/utils/types";
import { contKeys } from "@/utils/keywords";

export default function Filter({ currentPeriod, onPeriodChange }: FilterProps) {
  return (
    <div className="my-6">
      <Select value={currentPeriod} onValueChange={onPeriodChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a period" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Period</SelectLabel>
            <SelectItem value="20xx">20XX</SelectItem>
            <SelectItem value="19xx">19XX</SelectItem>
            <SelectItem value="18xx">18XX</SelectItem>
            <SelectItem value="14xx">14XX</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
