'use client';

import { LoginForm } from '@/components/Forms/login-form.component';
import { LoginWithButton } from '@/components/Forms/login-with-button.component';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import BG_register from '@/public/BG-register.svg';
import { FcGoogle } from 'react-icons/fc';
import { RegisterForm } from '@/components/Forms/register-form.component';

export default function Page() {
  return (
    <>
      <div className="lg:w-1/2 hidden lg:flex items-center">
        <div className="relative h-3/4 w-full content-center ">
          <Image src={BG_register} alt="Login Background" fill />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <Card className="max-w-sm w-full">
          <div className="">
            <h2 className="text-2xl font-semibold text-center mb-2">Sign up for an account</h2>
            <p className="text-sm text-white/30 italic text-center">
              Signing up for an account is free and easy.
            </p>
          </div>
          <LoginWithButton
            text="Register"
            provider="Google"
            icon={<FcGoogle className="mr-2 h-5 w-5" />}
          />
          <div className="divider m-0">or</div>
          <RegisterForm />
        </Card>
      </div>
    </>
  );
}
