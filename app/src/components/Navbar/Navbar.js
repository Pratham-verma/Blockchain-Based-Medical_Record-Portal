import React from 'react';
import "./Navbar.css";
import healthReport from "../../assets/285-2859467_medical-record.jpeg";
import { useDispatch, useSelector } from 'react-redux';
import { loadAccount, loadProvider } from '../../store/interactions';
import Blockies from "react-blockies";

const Navbar = () => {
    const dispatch = useDispatch();
    const provider = useSelector((state) => state.provider.connection);
    const account = useSelector((state) => state.provider.account);
    const balance = useSelector((state) => state.provider.balance);

    const connectHandler = async () => {
        let providerInstance = provider;
        if (!providerInstance) {
            providerInstance = loadProvider(dispatch);
        }
        await loadAccount(providerInstance, dispatch);
    }

    const networkHandler = async (e) => {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.target.value }],
        });
    };

    return (
        <div className="Navbar">
            <div className="nav__name">
                <img src={healthReport} alt="MedLock Logo" />
                <h2>MedLock</h2>
            </div>
            <div className="nav__networkSelector">
                <select name="network" id="network" onChange={networkHandler}>
                    <option value="0" disabled>Select Network</option>
                    <option value="31337">Localhost</option>
                    <option value="11155111">Sepolia</option>
                </select>
            </div>
            <div className="nav__balance">
                {balance && (
                    <p className="nav__myBalance">
                        <small>My Balance: </small>
                        {Number(balance).toFixed(2)} ETH
                    </p>
                )}
                {account ? (
                    <a className="nav__myAccount" href="#">
                        <Blockies
                            seed={account}
                            size={8}
                            scale={3}
                            color="#2187D0"
                            bgColor="#F1F2F9"
                            spotColor="#767f92"
                            className="identicon"
                        />
                        {account.slice(0, 5) + "..." + account.slice(38, 42)}
                    </a>
                ) : (
                    <button className="nav__balance-box" onClick={connectHandler}>
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;