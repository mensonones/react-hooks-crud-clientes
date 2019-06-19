import React from "react";

const ClienteTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>E-mail</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.clientes.length > 0 ? (
        props.clientes.map(cliente => (
          <tr key={cliente.id}>
            <td>{cliente.name}</td>
            <td>{cliente.email}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(cliente);
                }}
                className="btn-editar"
              >
                Edit
              </button>
              &nbsp;
              <button
                onClick={() => props.deleteCliente(cliente.id)}
                className="btn-red"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No clientes</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ClienteTable;
