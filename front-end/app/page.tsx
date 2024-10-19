"use client";
import { Spinner } from "@nextui-org/spinner";

import { Navbar } from "@/components/navbar";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { loading } = useAuth();

  if (loading)
    return (
      <section className="flex flex-col items-center justify-center h-screen w-screen">
        <Spinner size="lg" />
      </section>
    );

  return (
    <section className="flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl font-bold">Hello Word!</h1>
    </section>
  );
}
