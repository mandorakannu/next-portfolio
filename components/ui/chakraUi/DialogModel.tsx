import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  title: string;
  description: string;
  value: boolean;
};

export function DialogModel({ title, description, value }: Props) {
  const { onClose } = useDisclosure();
  const [open, setOpen] = useState(value);
  const closeTheModel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal isOpen={open} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalBody>{description}</ModalBody>

          <ModalFooter>
            <Button
              className="bg-blue-500 text-white"
              mr={3}
              onClick={closeTheModel}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
