import React, { useState } from 'react'
import {contract} from '../../helper/getContract_instance'
import Web3, { Contract, InvalidTypeAbiInputError } from 'web3';


export default function OwnProperty() {
    const web3 = new Web3(window.ethereum);
    const [currAcc, setAcc]=useState()
    const [ idx , setidx] =useState();
    async function Connect(){
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const selectedAccount = accounts[0];
    console.log(selectedAccount)
    setAcc(selectedAccount);
    return selectedAccount;
    }
    Connect();

    async function OwnProperty(){
        contract.methods.SellProperty(1).send({from:currAcc})
        .then(val=>{
          console.log(val);
          alert("Property Owned")
        }).catch(e=>{
          console.log(e);
        })
    }
    
  return (
     <div className='mt-40 bg-black border p-10 flex flex-col w-1/2 m-auto'>
    <div className='text-center m-5'>
    <span className='bg-blue-900 pr-2 pl-2 p-1 rounded m-2'>
    Current Address 
    </span>
     {currAcc}
    </div>

    <div className='flex flex-col'>
    <input className=' text-black m-2' placeholder='Enter the property id ' type='number' onChange={(e)=>{
        setidx(e.target.value);
    }}></input>

    <button onClick={()=>{
        OwnProperty(parseInt(idx))
    }}>Change Status</button>
    
    </div>
    </div>
  )
}
