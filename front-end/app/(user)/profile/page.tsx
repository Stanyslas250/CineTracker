"use client";

import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      Hello
    </section>
  );
}
