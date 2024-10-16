'use client'
import { LoginForm } from "@/components/forms/login-form";
import Image from "next/image";
import BG from "@/public/SVG/login-bg.svg";
import Link from "next/link";
import { LoginWithGoogle } from "@/components/forms/LoginWithGoogle";
import { Card } from "flowbite-react";

export default function Page() {
  return (
    <main className="w-screen h-screen bg-base-100 flex flex-row">
      <div className="lg:block  hidden lg:w-1/2 lg:h-screen">
        <div className="h-full relative">
          <Image src={BG} alt="Login image Illustration" fill />
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-screen flex justify-center items-center">
        <Card className="card card-compact bg-neutral w-80 lg:w-96">
          <h3 className="card-title self-center font-bold text-2xl">
            Welcome Back!
          </h3>
          <div className="card-body gap-4">
            <LoginWithGoogle />
            <div className="divider m-0">or</div>
            <LoginForm />
            <div className="flex gap-2 self-center">
              <span>Don&apos;t have a account?</span>
              <Link
                href={"/register"}
                className="text-secondary hover:font-medium hover:underline"
              >
                Signup Here
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
