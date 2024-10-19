import Image from "next/image";

import BG from "@/public/BG/register-bg.svg";
import { RegisterForm } from "@/components/Form/register-form";

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
          <Image fill alt="Login image Illustration" src={BG} />
        </div>
      </div>
    </main>
  );
}
