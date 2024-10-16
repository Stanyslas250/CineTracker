"use client";
import { signInWithGoogle } from "@/actions/user.action";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { setTimeout } from "timers";
/*
TODO: Make the login with Google logic
 */
export const LoginWithGoogle = ({ text }: { text: string }) => {
  const router = useRouter();
  const handleSubmit = async () => {
    const response = await signInWithGoogle();
    if (response) {
      setTimeout(() => {
        router.push("/");
      }, 500);
    }
  };
  return (
    <button
      className="btn btn-outline btn-neutral font-bold"
      onClick={handleSubmit}
    >
      <FcGoogle size={20} />
      {text ? text : "Login"} with Google
    </button>
  );
};
