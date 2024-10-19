import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { LuLogOut, LuUser } from "react-icons/lu";
import { User } from "firebase/auth";

import { siteConfig } from "@/config/site";
import { logOut } from "@/actions/auth.action";

export default function UserMenu({ user }: { user: User }) {
  const handleLogout = () => {
    logOut();
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          showFallback
          fallback={<LuUser size={20} />}
          src={user.photoURL ? user.photoURL : ""}
        />
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
          <DropdownItem
            color="danger"
            startContent={<LuLogOut />}
            onClick={handleLogout}
          >
            Logout
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
