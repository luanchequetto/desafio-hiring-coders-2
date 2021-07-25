import React from 'react';
import logoGama from '../../assets/logo-gama.png'
import './styles.css'
import { HiPlusCircle, HiUserAdd, HiUserGroup, HiViewList } from 'react-icons/hi'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header-content'>
      <Link to='/'><img src={logoGama} atl='logo' className='logo' /></Link>
      <div className='header-buttons'>
        <Link to='/add/client' ><HiUserAdd /> Cadastrar Clientes</Link>
        <Link to='/list/clients' ><HiUserGroup /> Listar Clientes</Link>
        <Link to='/add/products' ><HiPlusCircle /> Cadastrar Produtos</Link>
        <Link to='/list/products' ><HiViewList /> Listar Produtos</Link>
      </div>
    </div>
  );
}

export default Header;