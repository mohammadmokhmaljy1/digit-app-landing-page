import React from 'react'

const ChoosenCard = ({title, desc, icon}) => {
  return (
    <div className='card text-center  rounded-xl p-5 w-70' style={{boxShadow: "0 5px 10px #00000055"}}>
        {icon}
        <h1 className='leading-16 text-xl'>{title}</h1>
        <p className='text-sm'>{desc}</p>
    </div>
  )
}

export default ChoosenCard;