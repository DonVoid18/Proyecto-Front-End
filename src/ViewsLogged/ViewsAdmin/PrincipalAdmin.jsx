import React from "react";
import Card from "../../Components/Card/Card";
import TableGeneral from "../../Components/TablesAdmin/TableGeneral";
const PrincipalAdmin = () => {
  return (
    <>
      <h1 className="mt-4">INFORMACIÓN GENERAL</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">
          Visualiza la información de tus reclamos y quejas.
        </li>
      </ol>
      <div className="d-grid gap-1">
        <div className="row">
          <Card
            title="Reclamos Pendientes"
            cant={12}
            details={"Total de quejas"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            }
          />
          <Card
            title="Reclamos Resueltos"
            cant={12}
            details={"Total de reclamos"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-check-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
              </svg>
            }
          />
          <Card
            title="Quejas Recibidas"
            cant={12}
            details={"Total de quejas"}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-envelope-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z" />
                <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
              </svg>
            }
          />
        </div>
      </div>
      <div className="d-grid gap-1 my-3">
        <h5 className="fw-bold">TABLA GENERAL</h5>
        <TableGeneral />
      </div>

      {/* modal que muestra la descripción de los reclamos o quejas independientemente */}

      <div
        className="modal fade"
        id="exampleModalScrollable"
        aria-labelledby="exampleModalScrollableTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalScrollableTitle">
                Descripción
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              accusamus optio molestias ratione, fugiat natus rem quos
              asperiores eos, aut laudantium! Alias nesciunt blanditiis possimus
              molestiae reprehenderit ea nobis non, placeat libero totam
              numquam, rerum assumenda minus amet sequi similique? Minima
              aliquid laborum, fuga cupiditate recusandae, corrupti molestiae
              maiores minus vel, explicabo perferendis? Eaque corrupti vitae
              fugiat maiores eos, quisquam alias perferendis ducimus blanditiis
              recusandae error necessitatibus et quos, quod quidem qui soluta?
              Laboriosam nihil placeat corporis ducimus, facere maiores
              cupiditate repudiandae quasi nostrum voluptas veniam et molestiae
              accusamus architecto explicabo qui ad quisquam excepturi quibusdam
              nesciunt nobis quia asperiores.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalAdmin;
