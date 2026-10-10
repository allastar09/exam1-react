import { useState } from 'react'
import './App.css'
import food from './img/porapoest-top 1.png'

function App() {
  return (
    <div className='bg-[#FAF6F2]'>
      <div className='flex justify-center items-center'>
        <h2 className='text-[50px] font-bold w-[700px]'>Доставка прогрессивного питания для гурманов</h2>
        <div>
          <img src={food} alt="" />
        </div>
      </div>

    


    </div>
  )
}

export default App