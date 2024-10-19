"use client";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { LuPencil, LuUser } from "react-icons/lu";
import { Divider } from "@nextui-org/divider";
import { Card, CardHeader } from "@nextui-org/card";
import { User as Avatar } from "@nextui-org/user";

import Header from "@/components/UI/Header";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
  const path = usePathname();
  const { user } = useAuth();

  if (!user) return null;

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <Header
        action={
          <Button
            color="primary"
            startContent={<LuPencil size={16} />}
            variant="flat"
          >
            Edit
          </Button>
        }
        title={path}
      />
      <Divider />
      <Card>
        <CardHeader>
          <Avatar
            avatarProps={{
              showFallback: true,
              src: user.photoURL ? user.photoURL : "",
              fallback: <LuUser size={20} />,
            }}
            description={user.email}
            name={user.displayName}
          />
        </CardHeader>
      </Card>
    </section>
  );
}
