import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {errorAlert, addItemSuccess, StockLimitAlert} from './Alerts'

const ItemCount = ({init, stock, onAdd}) => {

	const [Counter, setCounter] = useState(init);

	const deduct = (counterStat) => {counterStat !== 1 ? setCounter(Counter - 1) : errorAlert() }
	
	const sum = (stockLimit) => {stockLimit === Counter ? StockLimitAlert() : setCounter(Counter + 1)}

  return (
    <div className="m-10">
			<div className="w-32 flex justify-between h-10 rounded-md shadow-md border-gray-200 ">
				<button onClick={() => {deduct(Counter)}} className="w-8 flex items-center justify-center py-1 border border-transparent font-medium rounded text-xl text-white bg-gray-400 hover:bg-gray-900"> 
					-
				</button>
				<span className="align-middle p-2 px-5 text-2xl leading-none bg-gray-50">{Counter}</span>
				<button onClick={() => {sum(stock)}} className="w-8 flex items-center justify-center py-1 border border-transparent font-medium rounded text-xl text-white bg-gray-400 hover:bg-gray-900"> 
					+
				</button>
      </div>
			<button onClick={() => {addItemSuccess(); onAdd = Counter}} className=" w-full flex items-center justify-center mt-2 py-1 border border-transparent font-medium rounded text-lg text-white font-mono bg-gray-400 hover:bg-gray-900"> 
				Add Item
			</button>
			<ToastContainer />
    </div>
  )
}

export default ItemCount;