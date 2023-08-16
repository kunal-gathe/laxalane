import React from 'react'
import {BiMinus, BiPlus} from 'react-icons/bi'

function ToggleQuantity({ quantity,setIncress,setDecress}) {

  return (
    <div
    className='quantity-container'>
        <div><BiMinus className='toggle' onClick={()=> setDecress()}/></div>
        <div className='toggle'>{quantity}</div>
        <div><BiPlus className='toggle' onClick={()=> setIncress()}/></div>
    </div>
  )
}

export default ToggleQuantity