import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";

import { LoginWithGoogle } from "./login-google";

export const LoginForm = () => {
  return (
    <Card className="p-9 w-2/3">
      <CardHeader className="flex flex-col gap-4">
        <h3 className="card-title self-center font-bold text-2xl">
          Welcome Back!
        </h3>
        <LoginWithGoogle />
      </CardHeader>
      <Divider className="my-4" />
      <CardBody>
        <form className="flex flex-col gap-4">
          <Input label="Email" type="text" variant="bordered" />
          <Input label="Password" type="password" variant="bordered" />
          <Button variant="solid">Login</Button>
        </form>
      </CardBody>
      <CardFooter className="justify-center">
        <span className="pr-2">Don&apos;t have a account ?</span>
        <Link href="/register">SignIn</Link>
      </CardFooter>
    </Card>
  );
};
