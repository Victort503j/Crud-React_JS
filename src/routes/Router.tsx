import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from '../Page/UserPage'
import RolPage from '../Page/RolPage'
import HomePage from '../Page/HomePage'
import LoginPage from '../Page/LoginPage'
import ClientPage from '../Page/ClientPage'
import { useAuthStore } from '../stores/Auth.store'
import ProductPage from '../Page/ProductPage'

function Router() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { OnGetInfo } = useAuthStore();

  useEffect(() => {
    OnGetInfo();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        {isAuthenticated ? (
          <>
            <Route path='/home' element={<HomePage></HomePage>}></Route>
            <Route path='/usuarios' element={<UserPage></UserPage>}></Route>
            <Route path='/clientes' element={<ClientPage></ClientPage>}></Route>
            <Route path='/roles' element={<RolPage></RolPage>}></Route>
            <Route path='/producto' element={<ProductPage></ProductPage>}></Route>
          </>
        ) : (
          <Route path='/' element={<LoginPage></LoginPage>}></Route>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default Router