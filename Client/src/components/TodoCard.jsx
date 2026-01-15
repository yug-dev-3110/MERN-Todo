import { motion } from 'framer-motion';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';

const TodoCard = ({ todo, onEdit, onDelete }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="card bg-base-100 shadow-xl border border-base-300"
  >
    <div className="card-body p-6">
      <h2 className="card-title text-primary">{todo.title}</h2>
      <p className="text-base-content/70 text-sm">{todo.description}</p>
      
      <div className="card-actions justify-end mt-4 pt-4 border-t border-base-200">
        <button onClick={() => onEdit(todo)} className="btn btn-ghost btn-sm text-info">
          <HiPencilAlt className="text-lg" /> Update
        </button>
        <button onClick={() => onDelete(todo._id)} className="btn btn-ghost btn-sm text-error">
          <HiTrash className="text-lg" /> Delete
        </button>
      </div>
    </div>
  </motion.div>
);

export default TodoCard;