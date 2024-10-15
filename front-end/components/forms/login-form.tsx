import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import { LoginWithGoogle } from "./LoginWithGoogle";
import Link from "next/link";
/*
TODO: Add login logic
 */
export const LoginForm = () => {
  return (
    <Card className="card card-compact bg-neutral w-80 lg:w-96">
      <h3 className="card-title self-center font-bold text-2xl">
        Welcome Back!
      </h3>
      <div className="card-body gap-4">
        <LoginWithGoogle />
        <div className="divider m-0">or</div>
        <form className="flex flex-col gap-2">
          <div className="w-full">
            <Label htmlFor="email1" value="Your email" />
            <TextInput
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="card-actions">
            <button type="submit" className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </form>
        <div className="flex gap-2 self-center">
          <span>Don&apos;t have a account?</span>
          <Link
            href={"/register"}
            className="text-secondary hover:font-medium hover:underline"
          >
            Signup Here
          </Link>
        </div>
      </div>
    </Card>
  );
};
