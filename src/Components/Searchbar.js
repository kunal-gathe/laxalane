import React from 'react'
import { useFilterContex } from '../Context/FilterContext'

function Searchbar() {
    const{filters: {text},getsearchvalue} = useFilterContex();
  return (
    <div className='serch-container'>
       <form onSubmit={(e)=> e.preventDefault()}>
       <input className='search-bar' type='text' name="text" defaultValue={text} onChange={getsearchvalue} placeholder='Search...'/>
       </form>
    </div>
  )
}

export default Searchbar