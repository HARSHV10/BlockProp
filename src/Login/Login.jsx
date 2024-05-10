import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import {address , abi} from '../constant/value'
import Web3, { Contract } from 'web3';

// Initialize Web3

export default function Login() {
  const web3 = new Web3(window.ethereum);
  const contractABI = abi
  const contractAddress = address;  
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  const [currAcc, setAcc]=useState();
  async function Connect(){
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    const selectedAccount = accounts[0];
    console.log(selectedAccount)
    setAcc(selectedAccount);
    return selectedAccount;
  }
  async function test(){
  // console.log(contract)
  // contract.methods.getRecord("0xB92cC4974dea0D9B8e4896020A945663CD8B21c7").call()
  //   .then(value => {
  //     console.log("Value from contract:", value);
  //     // Update state or do something else with the value
  //   })
  //   .catch(error => {
  //     console.error("Error fetching value:", error);
  //   });
  contract.methods.increase().send({from:currAcc})
  .then(val=>{
    console.log(val);
  }).catch(e=>{
    console.log(e);
  })
  // contract.methods.getCount().call()
  // .then(val=>{
  //   console.log(val);
  // }).catch((e)=>{
  //   console.log(e)
  // })
  }


  async function getPropertyDetails(a){
    contract.methods.getPropertyDetails(1).call()
    .then(val=>{
      console.log(val);
    }).catch(e=>{
      console.log(e);
    })
  }

  async function testing(a){
    contract.methods.getAllProperty().call()
    .then(val=>{
      console.log(val);
    }).catch(e=>{
      console.log(e);
    })
  }

  async function addNominee(){
    contract.methods.addNominee(1,"0xd3612C60BF9668d8bCA2b7736f112885F2bfA05B").send({from:currAcc})
    .then(val=>{
      console.log(val);
    }).catch(e=>{
      console.log(e);
    })
  }
 async function ChangePropertyStatus(){
  contract.methods.changeStatus(1,"0xd3612C60BF9668d8bCA2b7736f112885F2bfA05B").send({from:currAcc})
    .then(val=>{
      console.log(val);
    }).catch(e=>{
      console.log(e);
    })
 }


 async function OwnProperty(){
  contract.methods.SellProperty(1).send({from:currAcc})
  .then(val=>{
    console.log(val);
  }).catch(e=>{
    console.log(e);
  })
 }

//  {currAcc}
//  <button onClick={Connect}>connect</button>
//  <button onClick={(getPropertyDetails)}>Get Property Details</button>  
//  <button onClick={testing}>List Of all Property</button>  
//  <button onClick={addNominee}>addNominee</button>
//  <button onClick={ChangePropertyStatus}>ChangePropertyStatus</button>
//  <button onClick={OwnProperty}>OwnProperty</button>

  return (
    <div>
    
    </div>
  )
}
