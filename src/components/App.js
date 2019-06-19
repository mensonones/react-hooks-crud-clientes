import React, { useState, Fragment, useEffect } from "react";
import AddClienteForm from "./cliente/form/Add";
import EditClienteForm from "./cliente/form/Edit";
import ClienteTable from "./cliente/table/Table";
import { setTimeout } from "timers";

const App = () => {
  const clientesData = [
    { id: 1, name: "Cliente 1", email: "cliente1@mail.com" },
    { id: 2, name: "Cliente 2", email: "cliente2@mail.com" },
    { id: 3, name: "Cliente 3", email: "cliente3@mail.com" },
    { id: 4, name: "Cliente 4", email: "cliente4@mail.com" },
    { id: 5, name: "Cliente 5", email: "cliente5@mail.com" },
  ];

  const initialFormState = { id: null, name: "", email: "" };

  const [clientes, setClientes] = useState(clientesData);
  const [currentCliente, setCurrentCliente] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addCliente = cliente => {
    cliente.id = clientes.length + 1;
    setClientes([...clientes, cliente]);

    localStorage.setItem("clientes", JSON.stringify(clientes));
  };

  const deleteCliente = id => {
    setEditing(false);

    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  const updateCliente = (id, updatedCliente) => {
    setEditing(false);

    setClientes(
      clientes.map(cliente => (cliente.id === id ? updatedCliente : cliente)),
    );
    localStorage.setItem("clientes", JSON.stringify(clientes));
  };

  const editRow = cliente => {
    setEditing(true);

    setCurrentCliente({
      id: cliente.id,
      name: cliente.name,
      email: cliente.email,
    });
  };

  return (
    <div className="card">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Edit Cliente</h2>
                <EditClienteForm
                  editing={editing}
                  setEditing={setEditing}
                  currentCliente={currentCliente}
                  updateCliente={updateCliente}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add cliente</h2>
                <AddClienteForm addCliente={addCliente} />
              </Fragment>
            )}
          </div>
          <div className="flex-large">
            <h2>View clientes</h2>
            <ClienteTable
              clientes={clientes}
              editRow={editRow}
              deleteCliente={deleteCliente}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
