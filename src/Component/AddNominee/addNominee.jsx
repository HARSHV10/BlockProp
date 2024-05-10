import React, { useState } from 'react'
import {contract} from '../../helper/getContract_instance'
import Web3, { Contract } from 'web3';
import Navbar from '../Navbar/Navbar';

export default function AddNominee() {

    const web3 = new Web3(window.ethereum);

    
    const [currAcc, setAcc]=useState()
    const [newAcc , setNewAcc]=useState();
    const [idx , setidx]=useState();

    async function Connect(){
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const selectedAccount = accounts[0];
    console.log(selectedAccount)
    setAcc(selectedAccount);
    return selectedAccount;
    }
    Connect();

    async function addNominee(idx ,addr){
        contract.methods.addNominee(parseInt(idx),addr).send({from:currAcc})
        .then(val=>{
          console.log(val);
          alert("nominee added Successfully");
        }).catch(e=>{
          console.log(e);
        })
    }

    return (
        <div>
        <Navbar/>
        <p className="mt-10 text-center text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
        Add Nominee
      </p>
        <div className='mt-20 bg-black border p-10 flex flex-col w-1/2 m-auto'> 
        <div className='text-center m-5'>
        <span className='bg-blue-900 pr-2 pl-2 p-1 rounded m-2'>
    Current Address 
    </span>
     {currAcc}
    </div>
    <div className='flex flex-col'>
   
    <input className='text-black m-2' placeholder='Enter the property id ' type='number' onChange={(e)=>{
        setidx(e.target.value);
    }}></input>
    
    <input className='text-black m-2' placeholder="Enter the nominee address " type='text' onChange={(e)=>{
        setNewAcc(e.target.value);
    }}></input>
    
    {newAcc}
    </div>
    
    <button className='bg-blue-900 ml-40 p-2 rounded w-1/2' onClick={()=>{
        addNominee(idx ,newAcc);
    }}>Add Nominee</button>
    
    </div>
    </div>
)
}
