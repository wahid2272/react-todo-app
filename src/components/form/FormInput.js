import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: "15px",
  },
}));

const FormInput = () => {
  const classes = useStyles();

  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={addTodo}>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="Make your to-do list"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <Button
          className={classes.button}
          color="primary"
          type="submit"
          variant="contained"
        >
          Create
        </Button>
      </form>
    </div>
  );
};

export default FormInput;
