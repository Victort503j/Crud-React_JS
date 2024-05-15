import { Button } from "@nextui-org/button";
import "./App.css";
import ListUser from "./components/user/ListUser";
import ListRol from "./components/rol/ListRol";
import ModalGlobal from "./global/ModalGlobal";
import { useState } from "react";
import { Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { useRolesStore } from "./stores/rol.store";
import CreateRole from "./components/rol/CreateRol";
import Router from "./routes/Router";
function App() {

  return (
    <>
      <Router></Router>
    </>
  );
}

export default App;
