import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
export default function User() {
  return (
    <div className="relative w-[80%] h-20 bg-neutral-600 rounded-full p-5 flex justify-end">
      <Select>
        <SelectTrigger className="w-[180px]">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
