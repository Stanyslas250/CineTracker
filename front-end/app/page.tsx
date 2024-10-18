import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Navbar />
      <h1 className="text-4xl font-bold">Hello Word!</h1>
    </section>
  );
}
