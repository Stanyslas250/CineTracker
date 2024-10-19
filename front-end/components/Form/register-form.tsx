"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginWithGoogle } from "./login-google";

import { RegisterData } from "@/types/authTypes";
import { registerWithEmail } from "@/actions/auth.action";
import { RegisterSchema } from "@/schemas/AuthSchema";

export const RegisterForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterData> = async (data) => {
    setLoading(true);
    const response = await registerWithEmail(data);

    if (response) {
      setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 500);
    }
  };

  return (
    <Card className="p-9 w-2/3">
      <CardHeader className="flex flex-col gap-4">
        <h3 className="text-center text-xl font-bold">Signup</h3>
        <LoginWithGoogle text="Register" />
      </CardHeader>
      <Divider />
      <CardBody>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            variant="bordered"
            {...register("username")}
            color={errors.username ? "danger" : "default"}
            errorMessage={errors.username ? errors.username.message : ""}
            isInvalid={errors.username ? true : false}
          />
          <Input
            label="Email"
            variant="bordered"
            {...register("email")}
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email ? errors.email.message : ""}
            isInvalid={errors.email ? true : false}
          />
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
            variant="bordered"
            {...register("password")}
            color={errors.password ? "danger" : "default"}
            errorMessage={errors.password ? errors.password.message : ""}
            isInvalid={errors.password ? true : false}
          />
          <Input
            label="Confirm Password"
            type="password"
            variant="bordered"
            {...register("confirmPassword")}
            color={errors.confirmPassword ? "danger" : "default"}
            errorMessage={
              errors.confirmPassword ? errors.confirmPassword.message : ""
            }
            isInvalid={errors.confirmPassword ? true : false}
          />
          <Checkbox>
            <span className="light:text-content1">Term and Condition</span>
          </Checkbox>
          <Button isLoading={loading} type="submit">
            {loading ? "Loading" : "Signup"}
          </Button>
        </form>
      </CardBody>
      <CardFooter className="gap-2 flex w-full justify-center">
        <span>Already have an account?</span>
        <Link
          className="text-primary hover:underline hover:text-accent hover:font-bold"
          href="/Register"
        >
          Register here
        </Link>
      </CardFooter>
    </Card>
  );
};
