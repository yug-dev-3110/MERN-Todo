import { motion, AnimatePresence } from 'framer-motion';
import { useState} from 'react';
import { HiX, HiSave, HiClipboardList, HiOutlineDocumentText, HiTag } from 'react-icons/hi';

const UpdateTodo = ({ isOpen, onClose, todo, onSave }) => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal modal-open overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="modal-box max-w-lg p-0 overflow-hidden bg-base-100 border border-base-300 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-base-200 bg-base-200/30">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <HiClipboardList size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Edit Task</h3>
                  <p className="text-[10px] text-base-content/50 uppercase tracking-[0.2em] font-bold">Workspace / Todo</p>
                </div>
              </div>
              <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">
                <HiX size={20} />
              </button>
            </div>

            {/* Body - Stacked Layout */}
            <div className="p-6 space-y-6">
              
              {/* Title Input Group */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-base-content/70">
                  <HiTag className="text-primary" />
                  Task Title
                </label>
                <input 
                  type="text" 
                  id="edit-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Design Landing Page"
                  className="input input-bordered w-full focus:input-primary bg-base-200/30 border-base-300 transition-all text-base font-medium" 
                />
              </div>

              {/* Description Textarea Group */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm font-semibold text-base-content/70">
                  <HiOutlineDocumentText className="text-primary" />
                  Description
                </label>
                <textarea 
                  id="edit-desc"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide more context about this task..."
                  className="textarea textarea-bordered h-40 focus:textarea-primary bg-base-200/30 border-base-300 transition-all resize-none text-base leading-relaxed"
                />
              </div>

            </div>

            {/* Footer */}
            <div className="bg-base-200/50 p-4 flex justify-end gap-3 px-6 py-4 border-t border-base-200">
              <button 
                className="btn btn-ghost no-animation font-bold text-base-content/60" 
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                className="btn btn-primary px-8 shadow-lg shadow-primary/20 gap-2"
                onClick={() => onSave({
                  ...todo,
                  title,
                  description
                })}
              >
                <HiSave size={18} />
                Save Changes
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default UpdateTodo;