"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaGoogle } from "react-icons/fa";

import { signInWithGoogle } from "@/actions/auth.action";

export const LoginWithGoogle = ({ text }: { text?: string }) => {
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
    <Button
      className="w-full"
      color="primary"
      startContent={<FaGoogle />}
      variant="shadow"
      onClick={handleSubmit}
    >
      {text ? text : "Login"} With Google
    </Button>
  );
};
