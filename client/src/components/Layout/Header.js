import React from "react";
import { NavLink, Link } from "react-router-dom";
import {useAuth} from '../../context/auth';
import toast from 'react-hot-toast';

export const Logo = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://scontent.ftrv2-1.fna.fbcdn.net/v/t39.30808-6/300384961_382823320690113_7929809269076397611_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=aoQxKVirrlMAX8aQ7Zb&_nc_ht=scontent.ftrv2-1.fna&oh=00_AfBntlKKk-mrCD0xaEZFtFI5z2VrA_ekY28Iy-RNi7yvrA&oe=6437817D" 
      height="55"
      width="140"/>
      
  </a>
);
const Header = () => {
  const [auth,setAuth]=useAuth();
  const handleLogout=() =>{
    setAuth({
      ...auth,
      user:null,
      token:'',
    });
    localStorage.removeItem('auth');
    toast.success('Logout Successfully ');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
            <Logo /> S h o p E a s e
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
              {
                !auth.user ? (<>
                <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
                </>) : (<>
                  <li className="nav-item">
                <NavLink onClick={handleLogout} to="/login" className="nav-link">
                  Logout
                </NavLink>
              </li>
                </>)
              }
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
