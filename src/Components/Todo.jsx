import { useState } from "react";

export default function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      { text: task, completed: false, id: Date.now() },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-start p-6">
      
      <div className="card w-full max-w-xl bg-base-100 shadow-xl">
        <div className="card-body">

          <h2 className="card-title text-black text-2xl">
            Task Manager
          </h2>
          <p className="text-black">
            Track your daily development tasks
          </p>

          <div className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Enter a task..."
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="input input-bordered w-full text-black"
            />
            <button onClick={addTask} className="btn btn-primary text-black">
              Add
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {tasks.length === 0 && (
              <p className="text-black text-center">
                No tasks yet 🚀
              </p>
            )}

            {tasks.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between p-3 border rounded-lg bg-white"
              >
                <span
                  onClick={() => toggleTask(t.id)}
                  className={`cursor-pointer text-black ${
                    t.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {t.text}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleTask(t.id)}
                    className="btn btn-success btn-sm text-black"
                  >
                    ✔
                  </button>

                  <button
                    onClick={() => deleteTask(t.id)}
                    className="btn btn-error btn-sm text-black"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}