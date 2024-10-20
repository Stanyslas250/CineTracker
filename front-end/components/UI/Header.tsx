"use client";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { LuArrowLeft, LuTrash, LuUser } from "react-icons/lu";
import { User } from "firebase/auth";
import { Divider } from "@nextui-org/divider";

import UpdateFormModal from "../Form/User/update-form";

export default function Header({ user }: { user: User }) {
  return (
    <div>
      <Card
        className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
        radius="none"
      >
        <CardHeader>
          <Button isIconOnly variant="light">
            <LuArrowLeft size={20} />
          </Button>
        </CardHeader>
        <CardBody className="px-12 pb-6 flex flex-row gap-6 items-center w-full justify-between ">
          <div className="flex gap-6 items-center ">
            <Avatar
              showFallback
              alt="User profile"
              className="w-32 h-32 text-large bg-primary-100"
              fallback={<LuUser size={"w-auto"} />}
              src={user.photoURL ? user.photoURL : ""}
            />
            <div className="flex text-secondary-50">
              <div className="flex flex-col gap-2">
                <h6 className="text-xl font-bold">{user.displayName}</h6>
                <span>Member since {user.metadata.creationTime}</span>
                <div className="flex flex-row gap-2">
                  <span>12 Movie Watchs</span>
                  <Divider orientation="vertical" />
                  <span>23 TV Shows Watchs</span>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-2 flex">
            <UpdateFormModal />
            <Button color="danger" startContent={<LuTrash size={16} />}>
              Delete account
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
