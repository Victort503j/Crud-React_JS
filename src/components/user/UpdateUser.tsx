import React, { useEffect, useState } from "react";
import { useUsersStore } from "../../stores/user.store";
import { useRolesStore } from "../../stores/rol.store";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

interface Props {
  closeModal: () => void;
  id: number;
  name: string;
  lastName: string;
  email: string;
  rolId: number;
  rolName: string;
  password: string;
}

const UpdateUser = (props: Props) => {
  const { OnGetRoles, rol } = useRolesStore();
  const { OnUpdate } = useUsersStore();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(props.password);
  const [rolId, setRolId] = useState(0);

  useEffect(() => {
    setName(props.name);
    setLastName(props.lastName);
    setEmail(props.email);
    setRolId(props.rolId);
    setPassword(props.password);
    OnGetRoles();
  }, [props.name, props.lastName, props.email, props.rolId, props.password, OnGetRoles]);

  const handleUpdateUser = () => {
    OnUpdate(props.id, { name, lastName, email, rolId, password });
    props.closeModal();
  };

  console.log(rolId);
  return (
    <>
      <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Select
          label="Rol"
          placeholder="Rol"
          style={{ maxWidth: '33rem' }}
          defaultSelectedKeys={[props.rolId.toString()]}
          onChange={(e) => setRolId(parseInt(e.target.value))}
        >
          {rol.map((r) => (
            <SelectItem key={r.id} value={r.id}>
              {r.name}
            </SelectItem>
          ))}
        </Select>

        <Input
          className="ml-4"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Input
          label="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
        />
        <Input
          className="ml-4"
          label="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Ingrese la contraseña"
        />
      </div>
      <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div className="flex justify-between mt-5">
        <Button color="danger" onPress={props.closeModal}>
          CANCELAR
        </Button>
        <Button color="primary" onClick={handleUpdateUser}>
          ACEPTAR
        </Button>
      </div>
    </>
  );
};

export default UpdateUser;
