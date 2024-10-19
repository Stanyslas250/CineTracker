"use client";

import { redirect } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    redirect("/");
  }

  return <>{children}</>;
};
