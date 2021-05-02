import store from "../redux/store";
import { ethers } from "ethers";
const CharacterVaultContract = require("../contract_ABI/CharacterVault.sol/CharacterVault.json");

export const BLOCKCHAIN_INITIALIZED = "BLOCKCHAIN_INITIALIZED"; // action type

// action creators (dispatch sends this to redux reducer)

function blockchainInitialized(data) {
    return {
        type: BLOCKCHAIN_INITIALIZED,
        payload: data
    };
}


//  set up provider, signer and contract instance

const initBlockchain = async () => {

    let provider;
    window.ethereum.enable().then(provider = new ethers.providers.Web3Provider(window.ethereum));


    const signer = await provider.getSigner()
    console.log("signer", signer);
    const userAddress =  await signer.getAddress();
    console.log("user address", userAddress);

    // initialize shadow contract

    let CV = null;
    console.log("READ ABI");
    console.log(CharacterVaultContract.abi);
    const abi = CharacterVaultContract.abi;
    CV = new ethers.Contract('0xD58dB17048507c6A4f9843cc42beE2c6bCb95d1C', abi, signer);
    // put state data into the REDUX store for easy access from other pages and components

    let data = { provider, signer, CV, userAddress };
    store.dispatch(blockchainInitialized(data));
  return data;
}

export default initBlockchain;
