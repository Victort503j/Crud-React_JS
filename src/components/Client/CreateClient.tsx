import React, { useState } from 'react'
import { useClientsStore } from '../../stores/client.store';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/react';

const CreateClient = ({ onCloseModal }: { onCloseModal: () => void }) => {
    const { OnCreateClient } = useClientsStore();
    const [name, setName] = useState("");
    const [dui, setDui] = useState("");
    const [points, setPoints] = useState(0);
    const CreateClients = () => {
        OnCreateClient({ name: name, dui: dui, points: points });
        onCloseModal();
    }

    return (
        <>
            <label>Nombre:</label>
            <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Ingrese el nombre del cliente"
            />
            <Input
                onChange={(e) => setDui(e.target.value)}
                type="text"
                placeholder="Ingrese el número de dui"
            />
            <Input
                onChange={(e) => setPoints(parseInt(e.target.value))}
                type="number"
                placeholder="Ingrese el número puntos"
            />
            <div className="flex justify-between mt-5">
                <Button color="danger" onClick={() => {
                    CreateClients();
                }}>

                    CANCELAR
                </Button>
                <Button
                    color="primary"
                    onClick={() => {
                        CreateClients();
                    }}
                >
                    ACEPTAR
                </Button>
            </div>
        </>
    );
};


export default CreateClient