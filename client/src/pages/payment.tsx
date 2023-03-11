import { ethers } from 'ethers'
import { useAddress } from "@thirdweb-dev/react"
import { useEffect, useState } from "react"

const Payment = () => {
  // admin address
  const [receiverAddress, setRecieverAddress] = useState('0xE157ef0fFAAC8d2767729619b743E97C6A67F2bB')
  // address of the logged in user
  const address = useAddress()
  // amount to transfer to doctor
  const [amount, setAmount] = useState<any>(0)
  // converting eth amount to wei amount
  const finalAmt = 1000000000000000000 * amount

  const sendTransaction = async () => {
    console.log(1)
    let params = [
      {
        from: address,
        to: receiverAddress,
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
        value: Number(finalAmt).toString(16)
      }
    ]
    let result = await window.ethereum.request({ method: 'eth_sendTransaction', params })
      .catch((err: any) => console.log(err))
  }

  console.log(address)

  return (
    <div className='max-w-2xl mx-auto border-4 border-gray-300 p-10 mt-10'>
      <h2 className='text-md font-semibold my-3'>Address:{address}</h2>
      {/* <h2 className='text-xl font-semibold text-center my-7'>Balance: {userBalance}</h2> */}

      <form onSubmit={() => sendTransaction()} action='' className='flex flex-col space-y-3'>
        <h2 className='text-3xl font-semibold text-gray-700'>Send Appointment fee</h2>
        <div className='flex flex-col space-y-2 font-semibold text-lg'>
          <label htmlFor=''>Doctor's Address</label>
          <input value={receiverAddress} className='border-4 px-3 py-2 focus:outline-none border-gray-300' type='text' placeholder='' />
        </div>
        <div className='flex flex-col space-y-2 font-semibold text-lg'>
          <label htmlFor=''>Amount in MATIC</label>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} className='border-4 px-3 py-2 focus:outline-none border-gray-300' type='text' placeholder='' />
          <p>Amount in Rs.{amount * 0.000732 * 115333.97}</p>
        </div>
        <button type='submit' className='bg-indigo-600 w-1/4 mx-auto text-white px-3 py-2'>Pay Now</button>
      </form>

    </div>
  )
}

export default Payment
