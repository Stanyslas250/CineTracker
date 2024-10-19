import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { LuLogOut, LuUser } from "react-icons/lu";

import { siteConfig } from "@/config/site";

export default function UserMenu() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar showFallback fallback={<LuUser size={20} />} name="User" />
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection showDivider>
          {siteConfig.userNavMenuItems.map((item, index) => (
            <DropdownItem key={index} href={item.href}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection>
          <DropdownItem color="danger" startContent={<LuLogOut />}>
            Logout
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
