import { Button } from "@nextui-org/button";
import Link from "next/link";

import UserMenu from "./user-menu";

export default function User() {
  const user = false;

  if (user) return <UserMenu />;

  return (
    <Button as={Link} color="primary" href="/login" variant="shadow">
      Get Started
    </Button>
  );
}
