/*
Copyright 2017 Shawn Cicoria
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License
*/


let Web3 = require('web3')

let web3 = new Web3()


web3.setProvider(new web3.providers.IpcProvider('/Users/cicoriasmbp13/tmp/oms/files/devchain/geth.ipc', require('net')));
if ( ! web3.isConnected()) {
    console.error('failed to connect to ipc')
}


web3.eth.isSyncing(function(error, sync){
    if(!error) {
        // stop all app activity
        if(sync === true) {
           // we use `true`, so it stops all filters, but not the web3.eth.syncing polling
           web3.reset(true);
        
        // show sync info
        } else if(sync) {
           console.log(sync.currentBlock);
        
        // re-gain app operation
        } else {
            // run your app init function...
        }
    }
});



// console.log('calling...')
// console.log(web3.eth.getCoinbase(), function(error, result){
//   if (error){
//     console.error(error)
//     return
//   }

//   console.log(result)
// })