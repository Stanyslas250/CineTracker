import { NavBar } from '@/components/nav-bar.component';
import { DarkThemeToggle } from 'flowbite-react';

export default function Page() {
  return (
    <>
      <NavBar>
        <DarkThemeToggle />
      </NavBar>
    </>
  );
}
