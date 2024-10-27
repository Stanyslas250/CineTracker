export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className="flex flex-row w-screen h-screen">{children}</section>;
}
