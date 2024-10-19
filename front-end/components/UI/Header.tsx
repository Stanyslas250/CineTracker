"use client";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import React from "react";
import { LuArrowLeft } from "react-icons/lu";

type HeaderPropsType = {
  title: string;
  action: React.ReactNode;
};

export default function Header(props: HeaderPropsType) {
  const router = useRouter();

  return (
    <div className="w-screen px-12 flex flex-col gap-6">
      <Button isIconOnly onClick={() => router.back()}>
        <LuArrowLeft size={24} />
      </Button>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold uppercase">
          {props.title.replace("/", "")}
        </h2>
        {props.action}
      </div>
    </div>
  );
}
