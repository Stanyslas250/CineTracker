"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { LoginWithGoogle } from "@/components/Form/login-google";

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Card className="p-9 w-2/3">
      <CardHeader className="flex flex-col gap-4">
        <h3 className="text-center text-xl font-bold">Signup</h3>
        <LoginWithGoogle text="Register" />
      </CardHeader>
      <Divider />
      <CardBody>
        <form className="flex flex-col gap-2">
          <Input label="Username" />
          <Input label="Email" />
          <Input
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
                  <FaEye className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            label="Password"
            type={isVisible ? "text" : "password"}
          />
          <Input label="Confirm Password" type="password" />
          <Checkbox>Term and Condition</Checkbox>
          <Button>Signup</Button>
        </form>
      </CardBody>
      <CardFooter className="gap-2 flex self-center">
        <span>Already have an account?</span>
        <Link
          className="text-primary hover:underline hover:text-accent hover:font-bold"
          href="/login"
        >
          Login here
        </Link>
      </CardFooter>
    </Card>
  );
};
