import React from 'react';
import Navbar from './Layout'
import LayoutNav from './Layout';

const Home = () => {
  return (
    <LayoutNav>
      <nav>
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-3xl font-bold mb-4">Bienvenido a mi sitio</h1>
            <p className="text-gray-600">Explora y descubre contenido increíble.</p>

          </div>
        </div>
      </nav>
    </LayoutNav>
  );
};

export default Home;
