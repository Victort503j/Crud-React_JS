import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
interface Props {
  OnClose: () => void;
  IsOpen: boolean;
  children: React.ReactNode;
  title: string
}

function ModalGlobalCreate(props: Props) {
  return (
    <Modal backdrop="blur" size="xl" isOpen={props.IsOpen} onClose={props.OnClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {props.title}
            </ModalHeader>
            <ModalBody>
              {props.children}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalGlobalCreate;
