import { Button } from "@nextui-org/button";
import Link from "next/link";

import UserMenu from "./user-menu";

import { useAuth } from "@/context/AuthContext";

export default function User() {
  const { user } = useAuth();

  if (user) return <UserMenu user={user} />;

  return (
    <Button as={Link} color="primary" href="/login" variant="shadow">
      Get Started
    </Button>
  );
}
