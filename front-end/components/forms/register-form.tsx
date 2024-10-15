import { Card, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import { LoginWithGoogle } from "./LoginWithGoogle";

/*
TODO: The logic of Register Form
*/
export const RegisterForm = () => {
  return (
    <Card className="card card-compact bg-neutral w-8/12">
      <h3 className="text-center text-xl font-bold">Signup</h3>
      <div className="card-body gap-4">
        <LoginWithGoogle />
        <div className="divider m-0">or</div>
        <form className="flex flex-col gap-2">
          <div className="flex gap-1 flex-col">
            <Label value="Username" />
            <TextInput placeholder="Username" />
          </div>
          <div className="flex gap-1 flex-col">
            <Label value="Email" />
            <TextInput placeholder="exemple@test.com" />
          </div>
          <div className="flex gap-1 flex-col">
            <Label value="Password" />
            <TextInput type="password" placeholder="**********" />
          </div>
          <div className="flex gap-1 flex-col">
            <Label value="Confirm Password" />
            <TextInput type="password" placeholder="**********" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-primary" type="submit">
              Signup
            </button>
            <div className="gap-2 flex self-center">
              <span>Already have an account?</span>
              <Link
                href="/login"
                className="text-primary hover:underline hover:text-accent hover:font-bold"
              >
                Login here
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};
