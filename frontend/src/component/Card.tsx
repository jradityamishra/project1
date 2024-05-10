import React from 'react'
interface CardProps {
    img: string;
    name: string;
    subname: string;
  }
  
const Card:React.FC<CardProps> = ({img,name,subname}) => {
  return (
    <div>
        <img className='w-[283px] h-[215px] rounded-xl' src={img} alt="" />
        <h2 className='text-[28px] m-2 leading-10'>{name}</h2>
        <h3 className='text-[17px] leading-6 m-2 text-gray-500'>{subname}</h3>
    </div>
  )
}

export default Card