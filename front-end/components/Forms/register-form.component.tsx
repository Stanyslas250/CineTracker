import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Link from 'next/link';

export function RegisterForm() {
  return (
    <>
      <form className="flex flex-col gap-4">
        <TextInput id="username" type="text" placeholder="jhondoe" required />
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
        <TextInput id="password" type="password" placeholder="Enter your password" required />
        <TextInput id="confPassword" type="password" placeholder="Confirm the password" required />
        <div className="flex items-center gap-2">
          <Checkbox id="accept" />
          <Label htmlFor="accept" className="flex">
            I agree with the&nbsp;
            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </a>
          </Label>
        </div>
        <Button type="submit">Signup</Button>
        <div className="self-center">
          <span>Do you already have an account ?&nbsp;</span>
          <Link href={'/login'} className="text-blue-500 hover:underline cursor-pointer">
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
}
