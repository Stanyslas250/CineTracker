import { Checkbox, Label, TextInput } from "flowbite-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas/AuthSchema";
import { LoginData } from "@/types/authType";
import { signInWithEmail } from "@/actions/user.action";
import { useState } from "react";
import { useRouter } from "next/navigation";
/*
TODO: Add login logic
 */
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
    const response = await signInWithEmail(data);
    setLoading(true);
    if (response) {
      setTimeout(() => {
        setLoading(false);
        router.push("/");
      }, 500);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="exemple@exemple.com"
          color={errors.email ? "failure" : "gray"}
          {...register("email")}
          helperText={errors.email ? <span>{errors.email.message}</span> : null}
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
          color={errors.password ? "failure" : "gray"}
          {...register("password")}
          helperText={
            errors.password ? <span>{errors.password.message}</span> : null
          }
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <div className="card-actions">
        <button type="submit" className="btn btn-primary w-full">
          {loading ? <div className="loading loading-spinner"></div> : null}
          Submit
        </button>
      </div>
    </form>
  );
};
