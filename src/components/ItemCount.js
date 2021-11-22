import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({init, stock, onAdd}) => {

	const [Counter, setCounter] = useState(init);

  const StockLimitAlert = () => {
		toast.warn('Sorry! We have only ' + JSON.parse(stock), {
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
	
	const addItemSuccess = () => {
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

	const errorAlert = () => {
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

	const deduct = (counterStat) => {counterStat !== 1 ? setCounter(Counter - 1) : errorAlert() }
	
	const sum = (stockLimit) => {stockLimit === Counter ? StockLimitAlert() : setCounter(Counter + 1)}

	const addProduct = () => {
		onAdd = stock;
		addItemSuccess();
	}

  return (
    <div className="m-10">
			<div className="w-32 flex justify-between h-10 rounded-md shadow-md border-gray-200 ">
				<button onClick={() => {deduct(Counter)}} className="w-8 flex items-center justify-center py-1 border border-transparent font-medium rounded text-xl text-white bg-gray-400 hover:bg-gray-900"> 
					-
				</button>
				<span className="align-middle p-2 px-5 text-2xl leading-none bg-gray-50">
					{Counter}
				</span>
				<button onClick={() => {sum(stock)}} className="w-8 flex items-center justify-center py-1 border border-transparent font-medium rounded text-xl text-white bg-gray-400 hover:bg-gray-900"> 
					+
				</button>
      </div>
			<button onClick={addProduct} className=" w-full flex items-center justify-center mt-2 py-1 border border-transparent font-medium rounded text-lg text-white font-mono font-normal bg-gray-400 hover:bg-gray-900"> 
				Add Item
			</button>
			<ToastContainer/>
    </div>
  )
}

export default ItemCount;