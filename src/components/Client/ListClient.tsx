import React, { useEffect, useState } from 'react'
import LayoutNav from '../Layout/Layout';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react';
import { FaRegEdit } from 'react-icons/fa';
import { useClientsStore } from '../../stores/client.store';
import { MdOutlineDeleteForever } from 'react-icons/md';
import CreateClient from './CreateClient';
import UpdateClient from './UpdateClient';

function ListClient() {
    const { clients, OnGetClients, OnDeleteClient } = useClientsStore();
    const [clientId, setClientId] = useState(0);
    useEffect(() => {
        OnGetClients();
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
        OnDeleteClient(clientId);
        CloseModal();
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");


    // Función para manejar cambios en el término de búsqueda
    const handleSearchChange = (event: {
        target: { value: React.SetStateAction<string> };
    }) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        setSearchQuery(searchTerm); // Al presionar el botón de buscar, actualiza el estado de la consulta de búsqueda
        setSearchTerm("");
    };

    const filteredClients = clients.filter((c) =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filtra usuarios basados en la consulta de búsqueda
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
                            Listado De Clientes
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
                                <th className="p-4 w-1/4">Nombre</th>
                                <th className="p-4 w-1/4">Dui</th>
                                <th className="p-4 w-1/4">Puntos</th>
                                <th className="p-4 w-1/4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-grey-light flex flex-col items-center justify-between w-full overflow-y-auto  max-h-[400px]">
                            {filteredClients.map((c) => (
                                <tr className="flex w-full text-sm border-b border-gray-100">
                                    <td className="p-4 w-1/4">{c.name}</td>
                                    <td className="p-4 w-1/4">{c.dui}</td>
                                    <td className="p-4 w-1/4">{c.points}</td>
                                    <td className="p-4 w-1/4">
                                        <div className="flex justify-between">
                                            <button
                                                onClick={() => {
                                                    setClientId(c.id);
                                                    handleOpen();
                                                }}
                                                className="bg-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center"
                                            >
                                                <MdOutlineDeleteForever size={22} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setClientId(c.id);
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
                    {/* Delete Modal */}
                    <Modal backdrop="blur" isOpen={isOpenModal} onClose={CloseModal}>
                        <ModalContent>
                            {(CloseModal) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1">
                                        Eliminar Cliente
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
                                <CreateClient onCloseModal={handleCloseCreateModal} />
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
                                        Editar Client
                                    </ModalHeader>
                                    <ModalBody>
                                        {clients.map((c) => {
                                            if (c.id === clientId) {
                                                return (
                                                    <UpdateClient
                                                        key={c.id}
                                                        id={c.id}
                                                        name={c.name}
                                                        dui={c.dui}
                                                        points={c.points}
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

export default ListClient