var ethStats = {};
ethStats.blockNumber = eth.blockNumber;
ethStats.gasPrice = eth.gasPrice;
//ethStats.syncing = eth.syncing;  -- //this is an object if hashing - so, need better logic
ethStats.hashRate = eth.hashrate;
ethStats.peerCount = net.peerCount;
console.log(JSON.stringify(ethStats));