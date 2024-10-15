"use client";

import { RegisterForm } from "@/components/forms/register-form";
import Image from "next/image";
import BG from "@/public/SVG/register-bg.svg";

/*
 TODO: Create the register page
 */
export default function Page() {
  return (
    <main className="w-screen h-screen bg-base-100 flex flex-row">
      <div className="lg:w-1/2 w-full lg:h-screen flex justify-center items-center">
        <RegisterForm />
      </div>
      <div className="lg:block  hidden lg:w-1/2 lg:h-screen">
        <div className="h-full relative">
          <Image src={BG} alt="Login image Illustration" fill />
        </div>
      </div>
    </main>
  );
}
