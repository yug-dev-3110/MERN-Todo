import { HiPlus, HiCheckCircle } from 'react-icons/hi';

const Navbar = ({ onOpenCreate }) => (
  <nav className="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50">
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <HiCheckCircle className="text-primary text-3xl" />
        <span className="text-xl font-bold tracking-tight">DoIt.ai</span>
      </div>
    </div>
    <div className="flex-none">
      <button onClick={onOpenCreate} className="btn btn-primary">
        <HiPlus className="text-lg" />
        Create Todo
      </button>
    </div>
  </nav>
);

export default Navbar;