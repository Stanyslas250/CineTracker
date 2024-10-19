import { LoginForm } from "@/components/Form/login-form";
import BG from "@/public/BG/login-bg.svg";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-screen h-screen bg-base-100 flex flex-row">
      <div className="lg:block  hidden lg:w-1/2 lg:h-screen">
        <div className="h-full relative">
          <Image src={BG} alt="Login illustration" fill />
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-screen flex justify-center items-center">
        <LoginForm />
      </div>
    </main>
  );
}
