import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StockLimitAlert = () => {
    toast.warn('Sorry! We have only ', {
      position: "top-center",
      bodyClassName: "font-mono text-sm p-10",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      role: "alert",
      });
  };
export const addItemSuccess = () => {
    toast.success('Product added successfully!', {
      position: "top-center",
      bodyClassName: "font-mono text-sm p-10",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      role: "alert",
      });
  }

export const errorAlert = () => {
    toast.error('What do you try its not posible', {
      position: "top-center",
      bodyClassName: "font-mono text-xs p-10",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      role: "alert",
      });
  }