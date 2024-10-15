'use client';
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Ico from '@/app/favicon.ico'

export function NavBar() {
	const router = useRouter()
	return (
		<Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <Image src={Ico} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" width={26} height={26}/>
        <span className="self-center whitespace-nowrap text-xl font-semibold ">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">
		<DarkThemeToggle/>
        <Button onClick={()=> router.push('auth/login')}>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
	);
}
