import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { LuLogOut, LuUser } from "react-icons/lu";
import { User } from "firebase/auth";
import { User as Avatar } from "@nextui-org/user";

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
          avatarProps={{
            showFallback: true,
            src: user.photoURL ? user.photoURL : "",
            fallback: <LuUser size={20} />,
          }}
          description={user.email}
          name={user.displayName}
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
