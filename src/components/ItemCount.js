import React, { useState } from 'react'

const ItemCount = ({init, stock, onAdd}) => {

	const [Counter, setCounter] = useState(init);

	const limitStockAlert = () => {
		alert("Stock limit exceeded")
	}

	const deduct = (counterStat) => {
		counterStat === 1 ? console.log("hola") : setCounter(Counter - 1);
	}
	
	const sum = (stockLimit) => {
		stockLimit === Counter ? limitStockAlert() : setCounter(Counter + 1);
	}

  return (
    <div>
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
			<button onClick={onAdd} className=" w-full flex items-center justify-center mt-2 py-1 border border-transparent font-medium rounded text-lg text-white font-mono font-normal bg-gray-400 hover:bg-gray-900"> 
				Add Item
			</button>
    </div>
  )
}

export default ItemCount;