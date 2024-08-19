import React, { useState,useContext, useEffect } from 'react'
import { Procontext } from '../context/Productcontext'
import { Link } from 'react-router-dom';

function Bed() {
    const { products } = useContext(Procontext);
    const[bed,setBed]=useState([])

    useEffect(()=>{
        if(products){
            setBed(products.filter((item)=>item.category==="bedroom"))
        }
    },[products])
    console.log(bed);
    
  return (
    <div className='bg-orange-100'>
        <br/>
        <h1 className='flex justify-center font-extralight  text-4xl  text-gray-800'>Bed Room Furnitures</h1>

        <p className='flex justify-center font-sans text-base text-gray-700 '>Beautiful Bedrooms, Beautiful Lives</p>
   
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py- lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {bed.map((product) => (
            <Link key={product.id}  to={product.id} className="group">
              <div  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 shadow-lg">
                <img
                  src={product.image}
                  alt={product.discriptio}
                  className="h-[300px] w-full object-cover object-center group-hover:opacity-75 transition-transform transform scale-100 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.new_price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bed