import { Button } from "@/components/ui/button";
import { User } from "../ui/user.component";
import Link from "next/link";

export function GetStartedState() {
  const user = true;

  if (!user) {
    return <User />;
  }

  return (
    <Button>
      <Link href="/login">Get Started</Link>
    </Button>
  );
}
