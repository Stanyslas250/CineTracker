'use client';

import Image from 'next/image';
import BG_login from '@/public/BG-Login.svg';
import { LoginForm } from '@/components/Forms/login-form.component';
import { Card, HR } from 'flowbite-react';
import { LoginWithButton } from '@/components/Forms/login-with-button.component';
import { FcGoogle } from 'react-icons/fc';

export default function Page() {
  return (
    <>
      <div className="lg:w-1/2 hidden lg:flex items-center">
        <div className="relative h-3/4 w-full content-center ">
          <Image src={BG_login} alt="Login Background" fill />
        </div>
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center">
        <Card className="max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-center mb-2">Welcome Back!👋</h2>
          <LoginWithButton provider="Google" icon={<FcGoogle className="mr-2 h-5 w-5" />} />
          <div className="divider">or</div>
          <LoginForm />
        </Card>
      </div>
    </>
  );
}
