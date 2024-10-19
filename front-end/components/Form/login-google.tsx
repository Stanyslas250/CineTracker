import { Button } from "@nextui-org/button";
import React from "react";
import { FaGoogle } from "react-icons/fa";

export const LoginWithGoogle = () => {
  return (
    <Button
      className="w-full"
      color="primary"
      startContent={<FaGoogle />}
      variant="shadow"
    >
      Login With Google
    </Button>
  );
};
