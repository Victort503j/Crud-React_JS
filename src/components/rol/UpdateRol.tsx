import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useRolesStore } from "../../stores/rol.store";

interface Props {
  closeModal: () => void;
  id: number;
  name: string;
}



const UpdateRole = (props: Props) => {
  const { OnUpdate } = useRolesStore();
  const [name, setName] = useState("");

  // Initialize the name state with the name prop
  useEffect(() => {
    setName(props.name);
  }, [props.name]);

  const UpdateRoles = () => {
    OnUpdate(props.id, { name });
    props.closeModal(); // Close the modal after updating the role
  };

  return (
    <>
      <label>Nombre:</label>
      <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <div className="flex justify-between mt-5">
        <Button color="danger" onPress={props.closeModal}>
          CANCELAR
        </Button>
        <Button color="primary" onClick={() => UpdateRoles()}>
          ACEPTAR
        </Button>
      </div>
    </>
  );
};

export default UpdateRole;