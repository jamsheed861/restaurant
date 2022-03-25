import React, { useState } from 'react'
import Img from '../components/Img'
import {products} from '../../src/data'
import Menubtn from './Menubtn'

const allCatValues = [...new Set(products.map((curElem)=> {return curElem.category})),'All']
console.log(allCatValues);


function Home() {
  const [item,setItems]=useState(products)
  const [catItems,setCaItems]=useState(allCatValues)
  const filterMenu =(cat) =>{
    if (cat==='All'){
      setItems(products);
      return
    }
    const update = products.filter((curelm)=>{
      return curelm.category === cat;
    })
    setItems(update)
    console.log(update);
  }
  return (
    <>
  <div className='media'>
    <div className='title'><h1>Restaurant</h1></div>
    <hr/>
    <div className='card'><h3>Menu Card</h3></div>
    
   
    <Menubtn filterMenu={filterMenu} catItems={catItems}/>
    
        <div className='home'>
            {item.map((items)=>(<Img key={items.id} link={items.img}  price={items.price} name={items.name} alt={items.alt}/>))}
        </div>

        </div>

    </>
  )
}

export default Home