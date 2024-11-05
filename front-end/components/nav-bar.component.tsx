'use client';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import BG from '../public/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavBarProps {
  children?: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
  const pathname = usePathname();
  return (
    <Navbar fluid>
      <NavbarBrand href="/">
        <Image src={BG} alt="Flowbite React Logo" width={36} height={36} />
        <span className="self-center pl-3 whitespace-nowrap text-xl font-semibold dark:text-white">
          CineTracker
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        {children}
        <Auth />
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active={pathname === '/' ? true : false}>
          Home
        </NavbarLink>
        <Dropdown label="Movies" inline>
          <DropdownItem as={Link} href="#">
            Popular
          </DropdownItem>
          <DropdownItem as={Link} href="#">
            Top rated
          </DropdownItem>
          <DropdownItem as={Link} href="#">
            Upcoming
          </DropdownItem>
        </Dropdown>
        <Dropdown label="TV Show" inline>
          <DropdownItem as={Link} href="#">
            Popular
          </DropdownItem>
          <DropdownItem as={Link} href="#">
            On TV
          </DropdownItem>
          <DropdownItem as={Link} href="#">
            Top rated
          </DropdownItem>
        </Dropdown>
        <NavbarLink as={Link} href="/about" active={pathname === '/about' ? true : false}>
          About
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

function Auth() {
  const user = false;

  if (!user)
    return (
      <Button as={Link} href="/login">
        Get started
      </Button>
    );

  return (
    <div className="flex gap-5">
      <Dropdown label="Lists" inline>
        <DropdownItem>Favorites</DropdownItem>
        <DropdownItem>My Lists</DropdownItem>
      </Dropdown>
      <Dropdown
        label={
          <Avatar placeholderInitials="JL" rounded className="btn btn-ghost gap-0">
            <div className="font-medium dark:text-white items-start flex flex-col">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
            </div>
          </Avatar>
        }
        inline
        arrowIcon={false}
      >
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Setting</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Logout</DropdownItem>
      </Dropdown>
    </div>
  );
}