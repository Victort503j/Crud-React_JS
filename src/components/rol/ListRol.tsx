import React, { useEffect, useState } from "react";
import { useRolesStore } from "../../stores/rol.store";
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
  Navbar,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import UpdateRole from "./UpdateRol";
import CreateRole from "./CreateRol";
import LayoutNav from "../Layout/Layout";

const ListRol = () => {
  const [searchName, setSearchName] = useState("");
  const { roles, OnGetRoles, OnDelete, pagination_roles } = useRolesStore();
  const [rolId, setRolId] = useState(0);
  useEffect(() => {
    OnGetRoles(1, 5, searchName);
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
    OnDelete(rolId);
    CloseModal();
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");


  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(searchTerm);
    setSearchTerm("");
  };

  const filteredRoles = roles.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const handleOpenCreateModal = () => {
    setIsOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const handleChangePage = (page: number) => {
    OnGetRoles(page, 5, "");
  }
  return (
    <>
      <LayoutNav>
        <>
          <div className="flex justify-center w-full">
            <h1 className="text-center text-3xl mb-6 mt-3 text-xl font-bold">
              Listado De Roles
            </h1>
          </div>
          <div className="ml-12 flex" >
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
              className="h-12 w-20 mt-1 bg-green-600 text-white rounded"
              onClick={handleOpenCreateModal}
            >
              Agregar
            </button>
          </div>
          <table className="text-left w-11/12 mx-auto mt-9">
            <thead className="bg-blue-900 flex text-white w-full">
              <tr className="flex w-full text-sm">
                <th className="p-4 w-1/4">Id</th>
                <th className="p-4 w-1/4">Nombre</th>
                <th className="p-4 w-1/4">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-grey-light flex flex-col items-center justify-between w-full overflow-y-auto  max-h-[400px]">
              {filteredRoles.map((r) => (
                <tr className="flex w-full text-sm border-b border-gray-100">
                  <td className="p-4 w-1/4">{r.id}</td>
                  <td className="p-4 w-1/4">{r.name}</td>
                  <td className="p-4 w-1/4">
                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          setRolId(r.id);
                          handleOpen();
                        }}
                        className="bg-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center"
                      >
                        <MdOutlineDeleteForever size={22} />
                      </button>
                      <button
                        onClick={() => {
                          setRolId(r.id);
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
          <div className="flex justify-center w-full mt-6">
            <Pagination
              showShadow
              showControls
              page={pagination_roles.currentPag}
              total={pagination_roles.totalPag}
              onChange={handleChangePage}
            />
          </div>
          {/* Delete Modal */}
          <Modal backdrop="blur" isOpen={isOpenModal} onClose={CloseModal}>
            <ModalContent>
              {(CloseModal) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Eliminar Rol
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

          <Modal
            backdrop="blur"
            isOpen={isOpenCreateModal}
            onClose={handleCloseCreateModal}
          >
            <ModalContent>
              <ModalHeader>Agregar Rol</ModalHeader>
              <ModalBody>
                <CreateRole onCloseModal={handleCloseCreateModal} />
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>

          <Modal
            backdrop="blur"
            isOpen={isOpenEditModal}
            onClose={closeEditModal}
          >
            <ModalContent>
              {(closeEditModal) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Editar Rol
                  </ModalHeader>
                  <ModalBody>
                    {roles.map((r) => {
                      if (r.id === rolId) {
                        return (
                          <UpdateRole
                            key={r.id}
                            id={r.id}
                            name={r.name}
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
        </>
      </LayoutNav>
    </>
  );
};

export default ListRol;
