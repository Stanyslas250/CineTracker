'use client';
import { Button } from 'flowbite-react';

interface LoginWithButtonProps {
  provider: 'Google' | '';
  icon: React.ReactNode;
  text?: string;
}

export function LoginWithButton({ provider, icon, text }: LoginWithButtonProps) {
  return (
    <Button color="gray">
      {icon}
      {text ?? 'Login'} with {provider}
    </Button>
  );
}
