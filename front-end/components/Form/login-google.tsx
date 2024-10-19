import { Button } from "@nextui-org/button";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export const LoginWithGoogle = ({ text }: { text: string }) => {
  return (
    <Button
      className="w-full"
      color="primary"
      startContent={<FaGoogle />}
      variant="shadow"
    >
      {text ? text : "Login"} With Google
    </Button>
  );
};
