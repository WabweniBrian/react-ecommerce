import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notify = () => toast.success("Wow so easy!");

  return (
    <div>
      <button
        onClick={notify}
        className="px-5 py-1 text-white bg-indigo-500 rounded-lg text-md"
      >
        Notify!
      </button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
