import { useState } from "react";
import { Form } from "../components/Form";
function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setTodo(e.target.value);
  // };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    console.log(todo);
    if (todo == null) return;

    const newTask = {
      id: crypto.randomUUID(),
      name: todo,
    };

    setTodoList((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  // const deleteTask = (key) => {
  //   const updTasks = todoList.filter((todo) => {
  //     return todo.key !== key;
  //   });
  //   setTodoList(updTasks);
  //   console.log(updTasks);
  // };
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-400">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <h1 className="mb-8 text-5xl font-bold">Todo List</h1>
        <Form todo={todo} handleChange={handleChange} addTask={addTask}></Form>
        <div className="todo-show-area">
          <ul id="tasks" className="flex flex-col gap-y-5">
            {todoList.map((todo) => {
              return (
                <li
                  key={todo.id}
                  className="flex justify-between px-10 py-6 text-2xl text-white rounded-lg bg-slate-500 "
                >
                  {todo.name}
                  <span
                    className="text-2xl text-red-400 cursor-pointer"
                    onClick={() => {
                      setTodoList((prevTasks) => {
                        return prevTasks.filter(
                          (currentTask) => currentTask.id !== todo.id
                        );
                      });
                    }}
                  >
                    X
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
