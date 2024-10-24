import { GetStartedState } from "@/components/auth/get-started-state.component";
import { ModeToggle } from "@/components/theme-toogle-button";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { mainMenu } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex justify-between items-center px-10 pt-4">
      <div>
        <span className="text-xl font-bold">CineTraker</span>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {mainMenu.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.href}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <GetStartedState />
    </nav>
  );
}
