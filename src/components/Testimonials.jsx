import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft ,FiChevronRight} from "react-icons/fi";


const Testimonials = (props) => {
  let review = props.review;
  const [index,setIndex] = useState(0);

  function leftShiftHandler(){
    if(index-1<0 ){
      setIndex(review.length -1);
    }
    else{
      setIndex(index -1);
    }
  }

  function righShiftHandler(){
    if(index + 1 >= review.length ){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  }

  function surpriseHandler(){
    let randomIndex = Math.floor(Math.random()*review.length);
    setIndex(randomIndex);
  }

  return (
    <div className='w-[85vw]  md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 rounded-md hover:shadow-lg'>
      <Card review={review[index]}>

      </Card>

      <div className='flex text-3xl mt-9 gap-3 text-violet-400 font-bold mx-auto  '>
        <button onClick ={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500'>
            <FiChevronLeft/>
        </button>

        <button onClick= {righShiftHandler}
         className='cursor-pointer hover:text-violet-500'>
            <FiChevronRight/>
        </button>
       </div>

       <div>
        <button onClick ={surpriseHandler}
         className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 text-lg
        cursor-pointer px-10 py-2 my-2 rounded-md font-bolt text-white '>
            Surprise Me
        </button>
       </div>
    </div>
  )
}

export default Testimonials
