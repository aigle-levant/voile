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

export default function Filter() {
  return (
    <>
      <Select>
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
    </>
  );
}
