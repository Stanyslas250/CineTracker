import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { LucideUser } from "lucide-react";

export const UserAvatar = () => {
  return (
    <div className="flex gap-2 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>
          <LucideUser />
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start">
        <span className="text-sm font-medium">Username</span>
        <span className="text-xs text-muted-foreground">
          jhondoe@example.com
        </span>
      </div>
    </div>
  );
};
