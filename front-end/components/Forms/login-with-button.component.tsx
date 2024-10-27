'use client';
import { Button } from 'flowbite-react';

interface LoginWithButtonProps {
  provider: 'Google' | '';
  icon: React.ReactNode;
}

export function LoginWithButton({ provider, icon }: LoginWithButtonProps) {
  return (
    <Button color="gray">
      {icon}
      Login with {provider}
    </Button>
  );
}
