

var Web3 = require('web3');
var web3 = new Web3();
var  net = require('net');

var host = '/Users/cicoriasmbp13/tmp/oms/files/devchain/geth.ipc';

var client = new net.Socket();
web3.setProvider(new web3.providers.IpcProvider(host,client));

web3.eth.getCoinbase(function(error, result){
  
})