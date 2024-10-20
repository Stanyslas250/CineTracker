import { Button } from "@nextui-org/button";
import { ModalBody, ModalFooter } from "@nextui-org/modal";
import React from "react";

export default function ProfileUpdateForm({
  onClose,
}: {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <ModalBody>Hello</ModalBody>
      <ModalFooter>
        <Button color="danger" variant="flat" onClick={onClose}>
          Close
        </Button>
        <Button color="primary">Sign in</Button>
      </ModalFooter>
    </div>
  );
}
