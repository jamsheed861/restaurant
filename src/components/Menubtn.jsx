import React from 'react'
import './res.css'

function Menubtn({filterMenu,catItems}) {
  return (
    <>
    <div className='menu'>
      
        {catItems.map((cur,index)=>{
          return <button className='btn' key={index} onClick={()=>filterMenu(cur)}>{cur}</button>
        })}
      
        {/* <button className='btn' onClick={()=>filterMenu('breakfast')}>Breakfast</button>
        <button className='btn' onClick={()=>filterMenu('lunch')}>Lunch</button>
        <button className='btn' onClick={()=>filterMenu('dinner')}>dinner</button>
        <button className='btn' onClick={()=>filterMenu('all')}>all</button> */}
    </div>
    </>

  )
}
export default Menubtn