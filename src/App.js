import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Navigations from "./Pages/Navigations";
import BloodRegistration from "./Pages/BloodRegistration";
import Developer from "./Pages/Developer";
import AddAgency from "./Pages/AddAgency";
import AddHealthCare from "./Pages/AddHealthCare";
import Dashboard from "./Pages/Dashboard";
import Deliver from "./Pages/Deliver";
import BulkDelivery from "./Pages/BulkDelivery";
import Collection from "./Pages/Collection";
import Distribution from "./Pages/Distribution";
import React from "react";
import { CONTRACT_OWNER } from "./SmartContractConfig";

//web3 set up
import Web3 from "web3";

function App() {
  const [account, setAccount] = React.useState("");

  const ethEnabled = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        const accounts = await window.web3.eth.getAccounts();
        console.log('Accounts ', accounts)
        setAccount(accounts[0]);
        return true;
      } catch (error) {
        if(error && error.code === 4001){
          console.log('User denied connection!');
          return true;
        }
        console.log("Error In Wallet connect: ", error);
        return false;
      }
    }
    return false;
  };

  const checkAndConnectToWallet =async () => {
    if (!await ethEnabled()) {
      alert("Please Install A Ethereum Wallet!");
    }
  }

  React.useEffect(() => {
    checkAndConnectToWallet()
  }, []);

  console.log("Account : ", account);

  console.log(checkAndConnectToWallet)

  return (
    <div
      className="App"
      style={{
        background: "red",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: 100,
        }}
      >
        <Navigations isOwner={account === CONTRACT_OWNER} checkAndConnectToWallet={checkAndConnectToWallet} account={account}/>
      </div>

      <HashRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/registration">
            <BloodRegistration account={account} />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/addagency">
            <AddAgency account={account} />
          </Route>
          <Route path="/addhealthcare">
            <AddHealthCare account={account} />
          </Route>
          <Route path="/stats">
            <Dashboard account={account} />
          </Route>
          <Route path="/deliver/:id/:gp">
            <Deliver account={account} />
          </Route>
          <Route path="/bulkdelivery/:max/:gp">
            <BulkDelivery account={account} />
          </Route>
          <Route path="/collection">
            <Collection account={account} />
          </Route>
          <Route path="/distribution">
            <Distribution account={account} />
          </Route>
          <Route path="/">
            <Home account={account} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
