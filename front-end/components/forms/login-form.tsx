import { Checkbox, Label, TextInput } from "flowbite-react";
/*
TODO: Add login logic
 */
export const LoginForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="exemple@exemple.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput
          id="password1"
          type="password"
          placeholder="********"
          required
        />
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
  );
};
