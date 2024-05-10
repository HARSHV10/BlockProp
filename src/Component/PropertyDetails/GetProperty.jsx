import React, { useEffect, useState } from 'react'
import {address , abi} from '../../constant/value'
import { contract } from '../../helper/getContract_instance';
import Navbar from '../Navbar/Navbar';
// Initialize Web3
import { getPropertyDetails } from '../../helper/getPropertyDetails';
import Property_details_card from './Property_details_card';
export default function GetProperty() {
    const [data , setdata]=useState();
    const [idx,  setidx] =useState(0);
    return(
        <div> 
        <p className="mt-10 text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
      Get Property Information
    </p> 
        <div className='flex flex-col justify-center  items-center '>
        
        <div className='mt-20 w-full flex justify-center  items-center m-5  '>
        <input  className='w-1/2 border rounded-xl p-2 bg-stone-800 m-1 w-1/2 ' type='number' onChange={(e)=>{
            setidx(e.target.value);
            console.log(e.target.value)
        }}></input>
        
        <button className='ml-10 border p-3 rounded-xl' onClick={async ()=>{
            console.log(parseInt(idx))
            await getPropertyDetails(parseInt(idx))
            .then((val)=>{
                setdata(val);
            }).catch(e=>console.log(e));
            
        }}>Search</button>
        </div>

        <Property_details_card val={data}/>
        
        
        </div>
        </div>
    )
}