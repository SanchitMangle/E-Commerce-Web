import React from 'react'
import { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import Title from './Title';

const CartTotal = () => {

    const {getCartAmount,currrency,delivery_fee} = useContext(ShopeContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'>
         <Title text1={'CART'} text2={'TOTALS'}/>
      </div>
      <div className='flex flex-col mt-2 gap-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currrency}{getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
            <p>Shipping Fee</p>
            <p>{currrency}{delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
         <b>Total</b>
         <b>{currrency}{getCartAmount() === 0 ? 0 :getCartAmount()+delivery_fee}.00</b>
        </div>

      </div>
    </div>
  )
}

export default CartTotal
