// import logo from "./logo.svg";
// import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const name = "Kushaal";
  const x = false;

  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting At School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping At Wallmart",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks();
  //     setTasks(tasksFromServer);
  //   };

  //   getTasks();
  // }, []);

  // const fetchTasks = async () => {
  //   const res = await fetch(" http://localhost:2000/tasks");
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // };

  const addNewTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="App">
      {
        /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

        <div className="container">
          {/* <h1>Hi {name}</h1>
          <h2>Hi {x ? "Correct" : "Wrong"}</h2> */}
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            showAddTask={showAddTask}
          />
          {showAddTask && <AddTask onAddTask={addNewTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            <h1>No Tasks!!!</h1>
          )}
        </div>
      }
    </div>
  );
}

export default App;
