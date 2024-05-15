import React, { useEffect, useState } from "react";
import { useUsersStore } from "../../stores/user.store";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import LayoutNav from "../Layout/Layout";
import ModalGlobalCreate from "../../global/ModalGlobalCreate";

const ListUser = () => {
  const { user, OnGetUsers, OnDelete } = useUsersStore();
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    OnGetUsers();
  }, []);

  const [isOpenModal, setIsOpenModel] = useState(false);
  const handleOpen = () => {
    setIsOpenModel(true);
  };
  const CloseModal = () => {
    setIsOpenModel(false);
  };

  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const handleOpenEditModal = () => {
    setIsOpenEditModal(true);
  };
  const closeEditModal = () => {
    setIsOpenEditModal(false);
  };

  const HandleDelete = () => {
    OnDelete(userId);

    CloseModal();
  };


  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchTerm);
    setSearchTerm("");
  };

  const filteredUsers = user.filter((u) =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };


  return (
    <>
      <LayoutNav>
        <>
          <div className="flex justify-center w-full">
            <h1 className="text-center text-3xl mb-6 mt-3 text-xl font-bold">
              Listado De Usuarios
            </h1>
          </div>
          <div className="ml-12 flex">
            <Input
              label="Nombre:"
              placeholder="Ingrese un nombre"
              className=" text-xl w-64 appearance-none flex "
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button
              className="ml-6 h-12 w-20 mt-1 bg-blue-900 text-white rounded"
              onClick={handleSearch}
            >
              Buscar
            </button>
            <button
              style={{ marginLeft: '37rem' }}
              className="ml-96 h-12 w-20 mt-1 bg-green-600 text-white rounded"
              onClick={handleOpenCreateModal}
            >
              Agregar
            </button>
          </div>
          <table className="text-left w-11/12 mx-auto mt-9">
            <thead className="bg-blue-900 flex text-white w-full">
              <tr className="flex w-full text-sm">
                <th className="p-4 w-1/4">Id</th>
                <th className="p-4 w-1/4">Rol</th>
                <th className="p-4 w-1/4">Nombre</th>
                <th className="p-4 w-1/4">Apellido</th>
                <th className="p-4 w-1/4">Departamento</th>
                <th className="p-4 w-1/4">Municipio</th>
                <th className="p-4 w-1/4">Complemento</th>
                <th className="p-4 w-1/4">Email</th>
                <th className="p-4 w-1/4">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-grey-light flex flex-col items-center  justify-between  w-full overflow-y-auto  max-h-[400px]">
              {filteredUsers.map((u) => (
                <tr className="flex w-full text-sm border-b border-gray-100">

                  <td className="p-4 w-1/4">{u.id}</td>
                  <td className="p-4 w-1/4">{u.rol.name}</td>
                  <td className="p-4 w-1/4">{u.name}</td>
                  <td className="p-4 w-1/4">{u.lastName}</td>
                  <td className="p-4 w-1/4">{u.address.department}</td>
                  <td className="p-4 w-1/4">{u.address.municipality}</td>
                  <td className="p-4 w-1/4">{u.address.complement}</td>
                  <td className="p-4 w-1/4">{u.email}</td>
                  <td className="p-4 w-1/4">

                    <div className="flex justify-between gap-2">
                      <button
                        onClick={() => {
                          setUserId(u.id);
                          handleOpen();
                        }}
                        className="bg-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center"
                      >
                        <MdOutlineDeleteForever size={22} />
                      </button>
                      <button
                        onClick={() => {
                          setUserId(u.id);
                          handleOpenEditModal();
                        }}
                        className="bg-green-600 text-white w-10 h-10 rounded-full flex justify-center items-center"
                      >
                        <FaRegEdit size={22} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <ModalGlobalCreate title="Crear Usuario" IsOpen={isOpenCreateModal} OnClose={handleCloseCreateModal}>
            <CreateUser onCloseModal={handleCloseCreateModal} />
          </ModalGlobalCreate>

          <Modal
            backdrop="blur"
            isOpen={isOpenEditModal}
            onClose={closeEditModal}
          >
            <ModalContent>
              {(closeEditModal) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Editar Usuario
                  </ModalHeader>
                  <ModalBody>
                    {user.map((u) => {
                      if (u.id === userId) {
                        return (
                          <UpdateUser
                            key={u.id}
                            id={u.id}
                            rolName={u.rol.name}
                            name={u.name}
                            lastName={u.lastName}
                            email={u.email}
                            rolId={u.rol.id}
                            password={u.password}
                            closeModal={closeEditModal}
                          />
                        );
                      }
                      return null;
                    })}
                  </ModalBody>
                  <ModalFooter></ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <Modal backdrop="blur" isOpen={isOpenModal} onClose={CloseModal}>
            <ModalContent>
              {(CloseModal) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Eliminar Usuario
                  </ModalHeader>
                  <ModalBody>
                    <h3>Deseas eliminar el registro?</h3>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onPress={CloseModal}>
                      CANCELAR
                    </Button>
                    <Button
                      color="primary"
                      onPress={() => {
                        HandleDelete();
                      }}
                    >
                      ACEPTAR
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      </LayoutNav>
    </>
  );
};

export default ListUser;
