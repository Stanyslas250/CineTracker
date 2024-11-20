import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { loginSchema } from '@/schemas/AuthSchemas';
import { LoginData } from '@/types/AuthTypes';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginData) => {
    console.log('SUCCESS', data);
  };
  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <div>
            <TextInput
              id="email1"
              type="email"
              placeholder="name@example.com"
              color={errors.email ? 'failure' : 'gray'}
              helperText={errors.email ? <span>{errors.email.message}</span> : null}
              {...register('email')}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            {...register('password')}
            color={errors.password ? 'failure' : 'gray'}
            helperText={errors.password ? <span>{errors.password.message}</span> : null}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
      <div className="flex gap-2 self-center">
        <span>Alreay have a account ?</span>
        <Link href={'/register'} className="text-blue-500 hover:underline cursor-pointer">
          Sign Up
        </Link>
      </div>
    </>
  );
}
