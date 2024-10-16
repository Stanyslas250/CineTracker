'use client';
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Ico from '@/app/favicon.ico'
import { logOut } from "@/actions/user.action";
import { useAuth } from "@/context/AuthContext";

export function NavBar() {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <Image
          src={Ico}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={26}
          height={26}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          Flowbite React
        </span>
      </Navbar.Brand>
      <div className="flex gap-2 md:order-2">
        <DarkThemeToggle />
        {user ? (
          <Button onClick={() => logOut()}>{user.displayName} Logout</Button>
        ) : (
          <Button onClick={() => router.push("/login")}>Get started</Button>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
