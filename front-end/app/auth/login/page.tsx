'use client'
import { LoginForm } from "@/components/forms/login-form";
import Image from "next/image";
import BG from "@/public/SVG/login-bg.svg";

export default function Page() {
  return (
    <main className="w-screen h-screen bg-base-100 flex flex-row">
      <div className="lg:block  hidden lg:w-1/2 lg:h-screen">
        <div className="h-full relative">
          <Image src={BG} alt="Login image Illustration" fill />
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-screen flex justify-center items-center">
        <LoginForm />
      </div>
    </main>
  );
}
