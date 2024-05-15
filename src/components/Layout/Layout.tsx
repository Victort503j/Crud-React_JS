import { ReactElement, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { CgClapperBoard } from "react-icons/cg";
import { FaRegUserCircle, FaUserPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoFolder } from "react-icons/io5";
import { MdContactEmergency, MdMovie } from "react-icons/md";
import { useAuthStore } from "../../stores/Auth.store";

interface LayoutNavProps {
    children: ReactElement;
}

export default function LayoutNav(props: LayoutNavProps) {
    const { OnLogout } = useAuthStore();
    // const [open, setOpen] = useState(true)
    return (
        <>
            <div className="fixed top-0 left-0 flex flex-row h-screen w-full">
                <div className="bg-blue-900
    h-screen p-5 pt-8 w-72" >
                    <div className="p-2">
                        <a href='/home' className={`text-white origin-left font-medium text-1xl text-lay-white`}>
                            <IoFolder className="text-white text-4xl rounded cursor-pointer block float-left mr-2 " />
                            <h1 className={`text-white origin-left font-medium text-2xl text-lay-white duration-200`}>
                                Sales Project
                            </h1>
                        </a>
                    </div>
                    <hr />

                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <FaRegUserCircle className='text-white text-3xl cursor-pointer block float-left mr-2' />
                            <a href='/roles' className={`text-white origin-left font-medium text-1xl text-lay-white`}>
                                Roles
                            </a>
                        </div>
                    </div>

                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <FaUserPlus className='text-white text-3xl cursor-pointer block float-left mr-3 ' />

                            <a href='/usuarios' className={` text-white origin-left font-medium text-1xl text-lay-white`} >

                                Usuarios
                            </a>
                        </div>
                    </div>

                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <MdMovie className='text-white text-3xl cursor-pointer block float-left mr-3 ' />

                            <a href='/clientes' className={` text-white origin-left font-medium text-1xl`}>
                                Clientes
                            </a>
                        </div>
                    </div>


                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <MdContactEmergency className='text-white text-3xl cursor-pointer block float-left mr-3 ' />
                            <a href='/list' className={`text-white origin-left font-medium text-1xl text-lay-white`} >
                                Productos
                            </a>
                        </div>
                    </div>

                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <CgClapperBoard className='text-white text-4xl cursor-pointer block float-left mr-3 text-lay-white ' />
                            <a href='/rentmovie' className={` text-white origin-left font-medium text-1xl`}>
                                Ventas
                            </a>
                        </div>
                    </div>
                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <CgClapperBoard className='text-white text-4xl cursor-pointer block float-left mr-3 text-lay-white ' />
                            <a href='/rentmovie' className={` text-white origin-left font-medium text-1xl`}>
                                Detalles Venta
                            </a>
                        </div>
                    </div>
                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <FiLogOut className="text-white text-4xl cursor-pointer block float-left mr-3" />
                            <button onClick={OnLogout} className={` text-white origin-left font-medium text-1xl`}>
                                Cerrar Sesion
                            </button>
                        </div>
                    </div>
                    <div className='p-1'>
                        <div className='mt-[20px]'>
                            <CgClapperBoard className='text-white text-4xl cursor-pointer block float-left mr-3 text-lay-white ' />
                            <a href='/producto' className={` text-white origin-left font-medium text-1xl`}>
                                Detalles Venta
                            </a>
                        </div>
                    </div>
                </div>
                <div className={`w-full`}>
                    {props.children}

                </div>

            </div>

        </>
    )
}