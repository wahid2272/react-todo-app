import React from 'react';

const FormInput = () => {
  return (
    <div>
      <form autoComplete="off">
          <input
            type="text"
            name="todos"
            id="todos"
            required
            placeholder="Make your to-do list"
          />
          <button type="submit">Create</button>
        </form>
    </div>
  );
};

export default FormInput;
