import React from 'react';
import logo from '../assets/logo.png';

const Header = ({title}) => {
    return (
      <header className="navbar bg-dark justify-content-between p-3">
        <div className="d-flex align-items-center w-100">
          <div className="col-4 d-flex justify-content-start">
            <img src={logo} alt="Logo" className="rounded-circle" style={{ maxHeight: '60px' }} />
          </div>
          <div className="col d-flex justify-content-end">
            <h1 className="text-white">{title}</h1>
          </div>
        </div>
      </header>
    );
  };
export default Header;
