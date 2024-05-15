import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useRolesStore } from "../../stores/rol.store";

const CreateRole = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { OnCreate } = useRolesStore();
  const [name, setName] = useState("");
  const CreateRoles = () => {
    OnCreate({ name: name });
    onCloseModal();
  }

  return (
    <>
      <label>Nombre:</label>
      <Input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Ingrese el nombre del rol"
      />
      <div className="flex justify-between mt-5">
        <Button color="danger" onClick={() => {
          CreateRoles();
        }}>

          CANCELAR
        </Button>
        <Button
          color="primary"
          onClick={() => {
            CreateRoles();
          }}
        >
          ACEPTAR
        </Button>
      </div>
    </>
  );
};

export default CreateRole;
