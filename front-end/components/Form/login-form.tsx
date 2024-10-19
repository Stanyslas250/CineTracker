"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginWithGoogle } from "./login-google";

import { LoginData } from "@/types/authTypes";
import { LoginSchema } from "@/schemas/AuthSchema";
import { signInWithEmail } from "@/actions/auth.action";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    setLoading(true);
    const response = await signInWithEmail(data);

    if (response) {
      setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 500);
    }
  };

  return (
    <Card className="p-9 w-2/3 light:bg-foreground light:text-content1">
      <CardHeader className="flex flex-col gap-4">
        <h3 className="card-title self-center font-bold text-2xl">
          Welcome Back!
        </h3>
        <LoginWithGoogle />
      </CardHeader>
      <Divider className="my-4" />
      <CardBody>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            type="text"
            variant="bordered"
            {...register("email")}
            color={errors.email ? "danger" : "default"}
            errorMessage={errors.email ? errors.email.message : ""}
          />
          <Input
            label="Password"
            type="password"
            variant="bordered"
            {...register("password")}
            color={errors.password ? "danger" : "default"}
            errorMessage={errors.password ? errors.password.message : ""}
          />
          <Checkbox>
            <span className="light:text-content1">Remember me</span>
          </Checkbox>
          <Button isLoading={loading} type="submit" variant="solid">
            {loading ? "Loading" : "Login"}
          </Button>
        </form>
      </CardBody>
      <CardFooter className="justify-center">
        <span className="pr-2">Don&apos;t have a account ?</span>
        <Link href="/register">SignIn</Link>
      </CardFooter>
    </Card>
  );
};
