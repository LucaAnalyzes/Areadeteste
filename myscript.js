const web3 = new Web3(Web3.givenProvider);

var accounts = [];

function Send(msg){

    switch(msg){


        case "connect":
            //some funcition

            connect();

            break;
    }
}
  
async function connect(){
    if (await window.ethereum){

        await window.ethereum.enable();

        if (await window.ethereum.isConnected()){

            accounts = await web3.eth.getAccounts();

            UIEvent.SendMessage("Connect", "SetAddress", accounts[0]);
        }
        else{
            alert("not connected")
        }

    }


}
