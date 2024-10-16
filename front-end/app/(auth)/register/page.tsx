"use client";

import { RegisterForm } from "@/components/forms/register-form";
import Image from "next/image";
import BG from "@/public/SVG/register-bg.svg";
import { Card } from "flowbite-react";
import { LoginWithGoogle } from "@/components/forms/LoginWithGoogle";
import Link from "next/link";

/*
 TODO: Create the register page
 */
export default function Page() {
  return (
    <main className="flex h-screen w-screen flex-row bg-base-100">
      <div className="flex w-full items-center justify-center lg:h-screen lg:w-1/2">
        <Card className="card card-compact w-6/12 bg-neutral lg:w-8/12">
          <h3 className="text-center text-xl font-bold">Signup</h3>
          <div className="card-body gap-4">
            <LoginWithGoogle text="Signin" />
            <div className="divider m-0">or</div>
            <RegisterForm />
            <div className="flex justify-center gap-1">
              <span>Already have an account ?</span>
              <Link
                href="/login"
                className="text-primary hover:font-bold hover:text-accent hover:underline"
              >
                Login here
              </Link>
            </div>
          </div>
        </Card>
      </div>
      <div className="hidden lg:block lg:h-screen lg:w-1/2">
        <div className="relative h-full">
          <Image src={BG} alt="Login image Illustration" fill />
        </div>
      </div>
    </main>
  );
}
