import { Checkbox, Label, TextInput } from "flowbite-react";

/*
TODO: Add logic of Register Form
*/
export const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <TextInput placeholder="Username" />
      <TextInput placeholder="exemple@test.com" />
      <TextInput type="password" placeholder="**********" />
      <TextInput type="password" placeholder="**********" />
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Term and Condition</Label>
      </div>
      <button className="btn btn-primary" type="submit">
        Signup
      </button>
    </form>
  );
};
