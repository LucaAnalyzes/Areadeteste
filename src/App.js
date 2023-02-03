import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';

function App() {

  const isPhantomInstalled = window.phantom?.solana?.isPhantom 
  const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
  
      if (provider?.isPhantom) {
        return provider;
      }
    }
  
    window.open('https://phantom.app/', '_blank');
  };
  
  const connect = async () => {
    const provider = getProvider(); // see "Detecting the Provider"
    try {
      const resp = await provider.connect();
      console.log(resp.publicKey.toString());
      var AddrressWallet= resp.publicKey.toString();
      // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
    } catch (err) {
      // { code: 4001, message: 'User rejected the request.' }
    }
  };
  
  
  setTimeout(()=> {connect()},2000);

  




  
    

 
 


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
