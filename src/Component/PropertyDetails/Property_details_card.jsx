import React, { useState } from 'react'
import './property_details.css'
export default function Property_details_card({val}) {
//   console.log("property details",val);
    console.log("owner Name",val?.OwnerName);
    console.log("nominee",val?.nominee);
    console.log("owner Account",val?.ownerAcc);
    console.log("Owner History",val?.ownerHistory);
    console.log("Sellable",val?.sellable)
    // const [OwnerName , setOwnerName]=useState(val?.OwnerName);
    // const [nominee , setnomiee]=useState(val?.nominee);
    // const [ownerAcc , setOwnerAcc]=useState(val?.ownerAcc);
    // const [ownerHistory , setOwnerHistory]=useState(val?.ownerHistory);
    // const [Sellable , setSellable]=useState(val?.sellable);

    return (
    <div className=' text-xl propertyDetails rounded-xl border'>
    <div className='flex p-4'>
    <div className='text-center w-1/2 '>
    Owner Name : 
    </div>
    <div className='w-1/2 '>
    {val?.OwnerName}
    </div>
    </div>
    <div >
    <div className=' text-center w-1/2'> 
    Nominee
    </div>
    {val?.nominee.map((element,idx) => {
        console.log(idx)
        return(<div className='flex  p-4'>
        <div className=' text-center w-1/2'>
        Nominee {idx}
        </div>
        <div className='w-1/2'>
        {element}
        </div>
        </div>)
    })}
    </div>
    <br></br>
    <div className='flex  p-4'>
    <div className=' text-center w-1/2'>
    Owner Account 
    </div>
    <div className='w-1/2'>
    {val?.ownerAcc}
    </div>
    </div>
    <br></br>
    <div>
    <div className='text-center w-1/2'>
    Owner History
    </div>
    {val?.ownerHistory.map((element,idx) => {
        console.log(element)
        return(
            <div className='flex  p-4 '>
            <div className='text-center w-1/2'>
            {idx}
            </div>
             {element}
            </div>
        
        )
    })}
    </div>
    <br></br>
    <div className='flex p-4'>
    <div className='text-center w-1/2'>
    Sellable to :
    </div>
    <div className='w-1/2'>
    {val?.sellable}
    </div>
    </div>

    </div>
  )
}
