import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <section className="h-screen w-screen p-12">{children}</section>
    </ProtectedRoute>
  );
}
