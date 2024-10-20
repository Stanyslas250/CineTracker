import { LuPencil } from "react-icons/lu";
import { Modal, ModalContent, ModalHeader } from "@nextui-org/modal";
import { Button } from "@nextui-org/button";
import { useDisclosure } from "@nextui-org/react";

import ProfileUpdateForm from "../update-form";

export default function UpdateFormModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="place-items-end"
        color="primary"
        startContent={<LuPencil size={16} />}
        variant="shadow"
        onPress={onOpen}
      >
        Edit Profile
      </Button>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Profile
              </ModalHeader>
              <ProfileUpdateForm onClose={onClose} />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
