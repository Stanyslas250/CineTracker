"use client";

import { redirect } from "next/navigation";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import Header from "@/components/UI/Header";
import { useAuth } from "@/context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    redirect("/");
  }

  return (
    <ProtectedRoute>
      <section className="h-screen w-screen">
        <Header user={user} />
        {children}
      </section>
    </ProtectedRoute>
  );
}
