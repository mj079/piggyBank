import React, { useEffect, useState } from 'react'
import Header from '../components/Header';

function TransanctionPage() {
    const [amount, setAmount] = useState("");
    const [money, setMoney] = useState([]);
    const [balance, setBalance] = useState("");

    const addMoney = () => {
        if(amount && amount >= 1) {
            setMoney([...money, Number(amount)]);
            setAmount("");
        }
    }

    useEffect(() => {
        let total = money.reduce((total, curr) => (total + curr), 0);
        setBalance(total.toLocaleString("en-in"))
    }, [money])
    
    
    const breakPiggy = () => {
        setMoney([])
    }

  return (
    <div>
        <Header />
        <div className='h-screen bg-gradient-to-b from-orange-100 to-orange-300'>
            <div className='h-24 w-full flex items-center justify-center'>
                <div className='h-14 w-48 bg-orange-900  rounded-xl flex justify-center items-center text-white text-xl'>
                    Balance: Rs. {balance}
                </div>
            </div>

            <div className='h-24 flex justify-center items-center'>
                <div className='flex gap-8'>
                    <input type="number" placeholder='Enter amount' value={amount} onChange={(e) => setAmount(e.target.value)} min={0} className='h-8 w-32 rounded-md pl-2'/>
                    <button onClick={addMoney} className='h-8 w-32 rounded-md bg-orange-500 text-white'>Add Money</button> 
                </div>
            </div>

            <div className='h-24 w-full flex items-center justify-center'>
                <div className='h-14 w-48 bg-orange-600  rounded-xl flex justify-center items-center text-white text-xl'>
                    <button onClick={breakPiggy}>Break Piggy</button>
                </div>
            </div>

            <h1 className='text-center my-12 text-4xl'>Transanctions</h1>

            <div>
                {money.map((element, index) => (
                    <div key={index} className='flex justify-center text-3xl'>
                        {index + 1}. Rs. {element.toLocaleString("en-in")}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TransanctionPage