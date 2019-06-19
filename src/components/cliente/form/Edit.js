import React, { useState, useEffect } from "react";

const EditClienteForm = props => {
  const [cliente, setCliente] = useState(props.currentCliente);

  useEffect(() => {
    setCliente(props.currentCliente);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setCliente({ ...cliente, [name]: value });

    localStorage.setItem("clientes", JSON.stringify(cliente));
  };

  return (
    <fieldset>
      <legend>Form Cliente</legend>
      <form
        onSubmit={event => {
          event.preventDefault();

          props.updateCliente(cliente.id, cliente);
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={cliente.name}
          onChange={handleInputChange}
        />
        <label>E-mail</label>
        <input
          type="text"
          name="email"
          value={cliente.email}
          onChange={handleInputChange}
        />
        <button>Update cliente</button> &nbsp;
        <button onClick={() => props.setEditing(false)} className="btn-yellow">
          Cancel
        </button>
      </form>
    </fieldset>
  );
};

export default EditClienteForm;
