import { Checkbox, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData } from "@/types/authType";
import { RegisterSchema } from "@/schemas/AuthSchema";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<RegisterData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <TextInput
        placeholder="Username"
        color={errors.username ? "failure" : "gray"}
        helperText={
          errors.username ? <span>{errors.username.message}</span> : null
        }
        {...register("username")}
      />
      <TextInput
        placeholder="exemple@test.com"
        color={errors.email ? "failure" : "gray"}
        helperText={errors.email ? <span>{errors.email.message}</span> : null}
        {...register("email")}
      />
      <TextInput
        type="password"
        placeholder="**********"
        color={errors.password ? "failure" : "gray"}
        helperText={
          errors.password ? <span>{errors.password.message}</span> : null
        }
        {...register("password")}
      />
      <TextInput
        type="password"
        placeholder="**********"
        color={errors.confirmPassword ? "failure" : "gray"}
        helperText={
          errors.confirmPassword ? (
            <span>{errors.confirmPassword.message}</span>
          ) : null
        }
        {...register("confirmPassword")}
      />
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
