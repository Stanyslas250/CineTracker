"use client";

import { LoginForm } from "@/components/forms/login-form.component";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <section className="w-screen h-screen flex">
      <div className="lg:w-1/2 h-full lg:block hidden "></div>
      <div className="lg:w-1/2 h-full w-full flex justify-center items-center">
        <LoginForm />
      </div>
    </section>
  );
}
