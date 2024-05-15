import { Button, Input } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useClientsStore } from "../../stores/client.store";

interface Props {
    closeModal: () => void;
    id: number;
    name: string;
    dui: string;
    points: number;
}



const UpdateClient = (props: Props) => {
    const { OnUpdateClient } = useClientsStore();
    const [name, setName] = useState("");
    const [dui, setDui] = useState("");
    const [points, setPoints] = useState(0);

    // Initialize the name state with the name prop
    useEffect(() => {
        setName(props.name);
        setDui(props.dui);
        setPoints(props.points);
    }, [props.name, props.dui, props.points]);

    const UpdateClient = () => {
        OnUpdateClient(props.id, { name, dui, points });
        props.closeModal();
    };

    return (
        <>
            <Input value={name} label="Nombre" onChange={(e) => setName(e.target.value)} type="text" />
            <Input value={dui} label="Dui" onChange={(e) => setDui(e.target.value)} type="text" />
            <Input value={points.toString()} label="Puntos" onChange={(e) => setPoints(parseInt(e.target.value))} type="number" />
            <div className="flex justify-between mt-5">
                <Button color="danger" onPress={props.closeModal}>
                    CANCELAR
                </Button>
                <Button color="primary" onClick={() => UpdateClient()}>
                    ACEPTAR
                </Button>
            </div>
        </>
    );
};

export default UpdateClient;