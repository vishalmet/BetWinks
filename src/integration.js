
import Web3 from "web3";

import { ethers } from "ethers";

import abi from "./abi.json";
const contract_address = "0x9049a45b53a2e0Ef61CeA88a3EE92A6c37769fd3";
const cost = "0.0001";
const _cost = ethers.utils.parseEther(cost).toString(); // Ensure cost is in wei
      

const isBrowser = () => typeof window !== "undefined";
const { ethereum } = isBrowser();

if (ethereum) {
  isBrowser().web3 = new Web3(ethereum); 
  isBrowser().web3 = new Web3(isBrowser().web3.currentProvider);
}



export const PLACEBET = async ({ candidate }) => {
    try {
      // console.log('Candidate:', candidate); 
      const provider =
        window.ethereum != null
          ? new ethers.providers.Web3Provider(window.ethereum)
          : ethers.providers.getDefaultProvider();
  
      const signer = provider.getSigner();
      const Role = new ethers.Contract(contract_address, abi, signer);
      const tokenId = await Role.placeBet(candidate, { value:_cost });
      return tokenId;
    } catch (error) {
      console.error('Error placing bet:', error);
    }
  };
  



