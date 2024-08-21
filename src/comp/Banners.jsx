import React from 'react'
import subscribe_save from './img/subscribe&save.png'
import maskgroup from './img/Mask Group.png'
import recipes from './img/recipes.png'
import chefmatelive from './img/chefmatelive.png'

function Banners() {
  return (
      <div className='grid md:grid-cols-2 grid-cols-1 '>
        
        <img src={subscribe_save} className='w-full'   alt="" />
        <img src={maskgroup} alt="" className='w-full' />
        <img src={recipes} alt="" className='w-full'/>
        <img src={chefmatelive} alt="" className='w-full'/>
    </div>
  )
}

export default Banners