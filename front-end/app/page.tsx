import { NavBar } from '@/components/nav-bar.component';
import { DarkThemeToggle } from 'flowbite-react';

export default function page() {
  return (
    <div className="">
      <NavBar>
        <DarkThemeToggle />
      </NavBar>
    </div>
  );
}
