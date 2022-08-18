import React from "react";
import Users from "./Users";
import useLogout from "../../hooks/useLogout";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./admin.css";
const Admin = () => {
  const [buttonToggle, setButtonToggle] = useState(false);
  const logout = useLogout();

  const signOut = async () => {
    await logout();
  };
  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark">
        <Link className="navbar-brand ps-3" to="index.html">
          UNIVERSITY
        </Link>
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          to="#!"
          onClick={() => setButtonToggle(!buttonToggle)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className="navbar-nav ms-auto ms-md-6 me-3 me-lg-4">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw"></i>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <Link className="dropdown-item" to="#!">
                  Configuración
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <button className="dropdown-item" onClick={signOut}>
                  Salir de la cuenta
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div
          id="layoutSidenav_nav"
          className={buttonToggle ? "active-navbar" : undefined}
        >
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Tablero</div>
                <Link className="nav-link" to="index.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>
                  PRINCIPAL
                </Link>
                <div className="sb-sidenav-menu-heading">Opciones</div>
                <Link className="nav-link collapsed" to="/reclamos.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  RECLAMOS
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
                <Link className="nav-link collapsed" to="/quejas.html">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-book-open"></i>
                  </div>
                  QUEJAS
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down"></i>
                  </div>
                </Link>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Usuario:</div>
              Patrick Rios
            </div>
          </nav>
        </div>
        <div
          id="layoutSidenav_content"
          className={buttonToggle ? "active-content" : undefined}
        >
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">PANEL PRINCIPAL</h1>
              <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item active">
                  Visualiza el estado general de los reclamos y quejas de los
                  usuarios.
                </li>
              </ol>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card container-card text-white mb-4">
                    <div className="card-body">Panel De Reclamos</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link
                        className="small text-white stretched-link"
                        to="/reclamos.html"
                      >
                        Visualizar
                      </Link>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card container-card text-white mb-4">
                    <div className="card-body">Panel De Reclamos</div>
                    <div className="card-footer d-flex align-items-center justify-content-between">
                      <Link
                        className="small text-white stretched-link"
                        to="/reclamos.html"
                      >
                        Visualizar
                      </Link>
                      <div className="small text-white">
                        <i className="fas fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">Tabla</div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admin;
