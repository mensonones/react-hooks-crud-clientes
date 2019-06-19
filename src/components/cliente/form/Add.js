import React, { useState } from "react";

const AddClienteForm = props => {
  const initialFormState = { id: null, name: "", email: "" };
  const [cliente, setCliente] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setCliente({ ...cliente, [name]: value });

    localStorage.setItem(name, value);
  };

  return (
    <fieldset>
      <legend>Form Cliente</legend>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!cliente.name || !cliente.email) return;

          props.addCliente(cliente);
          setCliente(initialFormState);
        }}
      >
        <label>Name</label>
        <input
          required
          type="text"
          name="name"
          value={cliente.name}
          onChange={handleInputChange}
        />
        <label>E-mail</label>
        <input
          required
          type="text"
          name="email"
          value={cliente.email}
          onChange={handleInputChange}
        />
        <button>Add new cliente</button>
      </form>
    </fieldset>
  );
};

export default AddClienteForm;
