'use client';
import {
  Button,
  Dropdown,
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
      <NavbarBrand href="https://flowbite-react.com">
        <Image src={BG} alt="Flowbite React Logo" width={36} height={36} />
        <span className="self-center pl-3 whitespace-nowrap text-xl font-semibold dark:text-white">
          CineTracker
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-3">
        {children}
        <Button as={Link} href="/login">
          Get started
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active={pathname === '/' ? true : false}>
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
      </NavbarCollapse>
    </Navbar>
  );
}
