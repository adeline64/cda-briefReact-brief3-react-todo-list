import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: true,
    },
  ];

  return (
    <div className='App'>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
