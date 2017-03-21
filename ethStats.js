
var ethStats = {};

ethStats.blockNumber = eth.blockNumber;
ethStats.gasPrice = eth.gasPrice;
ethStats.syncing = eth.syncing;
ethStats.hashRate = eth.hashRate;
ethStats.peerCount = eth.peerCount;

console.log(JSON.stringify(ethStats));