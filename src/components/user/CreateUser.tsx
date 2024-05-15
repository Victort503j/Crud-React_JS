import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useUsersStore } from "../../stores/user.store";
import { useRolesStore } from "../../stores/rol.store";

const CreateUser = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const { OnCreate } = useUsersStore();
  const { OnGetRoles, rol } = useRolesStore()
  const [department, setDepartment] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [complement, setComplement] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rolId, setRolId] = useState(0);

  const CreateUsers = () => {
    OnCreate({
      department: department,
      municipality: municipality,
      complement: complement,
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      rolId: rolId,
    });
    onCloseModal();
  };

  useEffect(() => {
    OnGetRoles()
  }, [])

  return (
    <>
      <div className="flex" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Select
          label="Rol"
          placeholder="Selecciona un rol"
          style={{ maxWidth: '33rem' }}
          value={rolId}
          onChange={(e) => setRolId(parseInt(e.target.value))}
        >
          {rol.map((r) => (
            <SelectItem key={r.id} value={r.name}>
              {r.name}
            </SelectItem>
          ))}
        </Select>
        <Input
          className="ml-4"
          label="Nombre"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Ingrese el nombre del usuario"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Input
          label="Apellido"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Ingrese el apellido"
        />


        <Input
          className="ml-4"
          label="Departamento"
          onChange={(e) => setDepartment(e.target.value)}
          type="text"
          placeholder="Ingrese el departamento"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Input
          label="Municipio"
          onChange={(e) => setMunicipality(e.target.value)}
          type="text"
          placeholder="Ingrese el municipio"
        />
        <Input
          className="ml-4"
          label="Complemento"
          onChange={(e) => setComplement(e.target.value)}
          type="text"
          placeholder="Ingrese el complemento"
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <Input
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Ingrese el email"
        />
        <Input
          className="ml-4"
          label="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Ingrese la contraseña"
        />
      </div>

      <div className="flex justify-between mt-5">
        <Button color="danger" onClick={onCloseModal}>CANCELAR</Button>
        <Button color="primary" onClick={CreateUsers}>ACEPTAR</Button>
      </div>
    </>
  );
};

export default CreateUser;
