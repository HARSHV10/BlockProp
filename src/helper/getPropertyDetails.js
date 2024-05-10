import { contract } from '../helper/getContract_instance'

export async function getPropertyDetails(a){
    
    const data = await contract.methods.getPropertyDetails(a).call()
    .then(val=>{
      console.log(val);
      return val;
    }).catch(e=>{
      console.log(e);
      return e;
    })
    return data;
  }