import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HashRouter} from "react-router-dom";

import Home from './Pages/Home'
import About from './Pages/About'
import Navigations from './Pages/Navigations'
import BloodRegistration from './Pages/BloodRegistration'
import Developer from './Pages/Developer'
import AddAgency from './Pages/AddAgency'
import React from 'react';

//web3 set up
import Web3 from 'web3'


function App() {

  const [account , setAccount ] = React.useState('');

  const ethEnabled = async () => {  
    if (window.ethereum) {    
      try{
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);
        const accounts = await window.web3.eth.getAccounts()
        setAccount(accounts[0])
        return true;  
      }catch(error){
        console.log('Error : ', error)
          return false;
      }
    }
    return false;
  }

  React.useEffect(() => {
    if(!ethEnabled()){
      alert('Please Install A Ethereum Wallet!')
    }
  },[])

  console.log('Account : ',account)

  return (
    <div className="App" style={{ background : 'red', width : '100vw', height: '100vh', overflow: 'hidden'}}>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: 100}}>
          <Navigations />
      </div>
        
        <HashRouter basename='/' >
         <Router>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/registration">
                <BloodRegistration
                 account={account}
                />
              </Route>
              <Route path="/developer">
                <Developer />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/addagency">
                <AddAgency 
                 account={account}
                />
              </Route>
              <Route path="/">
                <Home 
                account={account}
                />
              </Route>
            </Switch>
    </Router>
    </HashRouter>
    </div>
  );
}

export default App;
