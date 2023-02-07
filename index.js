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
        console.log(walletAddress());
        const resp = await provider.connect();
        console.log(walletAddress());
        var AddrressWallet= resp.publicKey.toString();
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
      } catch (err) {
        // { code: 4001, message: 'User rejected the request.' }
      }
    };
    
    const walletAddress = () => {
        const provider = getProvider();
        try {
            return provider.publicKey.toBase58();
        } catch (err) {
            return '';
        }
    }

    setTimeout(()=> {connect()},2000);
  
    
  