import "./index.css";

function App() {
  return (
      <div className="ToDo-App">
        <h1>To Do List</h1>
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

        <ul>
          <li>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Things to do
            </label>
            <button>Edit</button>
          </li>
          <li>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
              Things to do
            </label>
            <button>Edit</button>
          </li>
        </ul>

        <div className="row">
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            All Complete
          </label>
          <p>You have 0 things to do</p>
          <button id="delete">Delete All</button>
        </div>
      </div>
  );
}

export default App;
