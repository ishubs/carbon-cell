
import React, { useState } from 'react';
import Web3 from 'web3';

const ConnectWallet: React.FC = () => {
    const [connected, setConnected] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [address, setAddress] = useState('' as string);
    const connectWallet = async () => {
        try {
            // Check if MetaMask is installed
            // @ts-ignore
            if (typeof window.ethereum !== 'undefined') {
                // Request access to the user's MetaMask account
                // @ts-ignore
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                // @ts-ignore
                const web3 = new Web3(window.ethereum);
                // Check if the user is connected to a wallet
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    setConnected(true);
                    setAddress(accounts[0]);
                    setErrorMessage('');
                    // Perform any additional actions with the connected wallet
                    // ...
                } else {
                    setConnected(false);
                    setErrorMessage('No wallet connected');
                }
            } else {
                setConnected(false);
                setErrorMessage('MetaMask not detected');
            }
        } catch (error) {
            setConnected(false);
            setErrorMessage('Failed to connect wallet');
        }
    };

    return (
        <div className='bg-white w-fit mx-auto border-dashed border-2 flex flex-col p-6 mb-3'>
            <p className='mb-5 font-semibold text-xl'>Try connecting your metamask</p>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={connectWallet}
            >Connect Wallet</button>
            {connected && <p className='text-center'>Wallet connected successfully!</p>}
            {connected && <p className='text-center font-light text-gray-700'>{address}</p>}
            {errorMessage && <p className='text-center'>{errorMessage}</p>}
        </div>
    );
};

export default ConnectWallet;