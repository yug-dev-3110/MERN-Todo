import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import TodoCard from "./components/TodoCard";
import UpdateTodo from "./components/UpdateTodo";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "./features/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(
      addTodo({
        title: "New Task",
        description: "Edit me !",
      })
    );
  };

  const handleUpdate = (updatedTodo) => {
    dispatch(
      updateTodo({
        id: updatedTodo._id,
        title: updatedTodo.title,
        description: updatedTodo.description,
      })
    );
    setEditingTodo(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar onOpenCreate={handleAdd} />

      <main className="p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoCard
                key={todo._id}
                todo={todo}
                onEdit={setEditingTodo}
                onDelete={handleDelete}
              />
            ))}
          </AnimatePresence>
        </div>
      </main>

      <UpdateTodo
        isOpen={!!editingTodo}
        todo={editingTodo}
        onClose={() => setEditingTodo(null)}
        onSave={handleUpdate}
      />
    </div>
  );
};

export default App;
