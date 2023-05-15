import './App.css';
import TodoApp from "./TodoApp.js"

function App() {
  return (
    <div className="App">
      <div className="container-fluid text-center d-flex flex-column align-items-center w-50">
        <h1 className="text-center mt-5" id="header">todos</h1>
        <TodoApp />
        <div id="stacked-todo"></div>
              <div id="second-stacked-todo"></div>
        <p className="mt-5" id="footer">
          Made with React.js. Click {" "}
          <a href="https://github.com/jessicabrinegar/todo-list">here</a> to see code.
        </p>
      </div>
    </div>
  );
}

export default App;
