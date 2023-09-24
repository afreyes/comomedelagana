import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context';
import logo from '../../img/imagen.png';

const Navbar = () => {
    const context = useContext(CartContext);
    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full h-16 bg-green-700 text-white">
            <div className="flex items-center w-full max-w-screen-xl">
                <div className="flex items-center justify-center w-40 h-10">
                    <img src={logo} alt="" /> 
                </div>
                <ul className="flex items-center justify-center">
                    <li className="font-semibold text-lg text-center"> 
                        <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Catalogo
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <NavLink to='/' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Inicio
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <NavLink to='/contacto' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Contacto
                        </NavLink>
                    </li>
                    <li className="ml-6">
                        <NavLink to='/*' className={({ isActive }) => isActive ? activeStyle : undefined}>
                            Not Found
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="ml-auto flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <input type="text" placeholder="Buscar" className="border p-2" />
                    <button className="bg-green-500 text-white p-2 rounded-md">
                        Buscar
                    </button>
                </div>
                <span>{context.count}</span>
            </div>
        </nav>
    )
}

export default Navbar;

