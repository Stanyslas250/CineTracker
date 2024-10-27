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

interface NavBarProps {
  children: React.ReactNode;
}

export function NavBar({ children }: NavBarProps) {
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
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink>
          <Dropdown label="Movies" inline>
            <DropdownItem>Popular</DropdownItem>
            <DropdownItem>Top rated</DropdownItem>
            <DropdownItem>Upcoming</DropdownItem>
          </Dropdown>
        </NavbarLink>
        <NavbarLink>
          <Dropdown label="TV Show" inline>
            <DropdownItem>Popular</DropdownItem>
            <DropdownItem>On TV</DropdownItem>
            <DropdownItem>Top rated</DropdownItem>
          </Dropdown>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
