import {address , abi} from '../constant/value'
import Web3, { Contract } from 'web3';

const web3 = new Web3(window.ethereum);
const contractABI = abi
const contractAddress = address;  
export const contract = new web3.eth.Contract(contractABI, contractAddress);
