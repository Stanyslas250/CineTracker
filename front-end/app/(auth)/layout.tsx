import Link from 'next/link';
import { TbSquareX } from 'react-icons/tb';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row w-screen h-screen relatif">
      <button className="absolute right-5 top-5 btn btn-ghost btn-sm btn-square">
        <Link href={'/'}>
          <TbSquareX className="h-6 w-6" />
        </Link>
      </button>
      {children}
    </section>
  );
}
