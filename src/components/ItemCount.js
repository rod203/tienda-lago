import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {addItemSuccess, errorAlert, StockLimitAlert} from './Alerts'

const ItemCount = ({quantity, setQuantity, stock, onAdd}) => {

	const handleRest = (counterStat) => {counterStat !== 1 ? setQuantity(quantity - 1) : errorAlert() }
	
	const handleSum = (stockLimit) => {stockLimit === quantity ? StockLimitAlert() : setQuantity(quantity + 1)}

  return (
    <div className="m-5 flex flex-row justify-center">
			<div className="w-32 flex justify-between h-10 rounded-md border-gray-200 ">
				<button onClick={() => {handleRest(quantity)}} className="w-8 flex items-center justify-center py-1 border border-transparent font-medium rounded text-xl text-white bg-gray-400 hover:bg-gray-900"> 
					-
				</button>

				<p className="align-middle p-2 px-5 text-2xl leading-none bg-gray-50">{quantity}</p>
				
				<button onClick={() => {handleSum(stock)}} className="w-8 flex items-center justify-center py-1 border border-transparent font-medium rounded text-xl text-white bg-gray-400 hover:bg-gray-900"> 
					+
				</button>

      </div>

			<button onClick={() => { onAdd(); addItemSuccess() } } className=" w-full flex items-center justify-center p-2 ml-5 border border-transparent font-light rounded text-md text-white font-mono bg-gray-400 hover:bg-gray-900"> 
				Add Item
			</button>
			
			<ToastContainer />
    </div>
  )
}

export default ItemCount;