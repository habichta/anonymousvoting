var Contract1 = artifacts.require("./Contract1.sol");
var Contract2 = artifacts.require("./Contract2.sol")


module.exports = (deployer) => {

deployer.deploy(Contract2)
.then(() => Contract2.deployed())
.then((contract2) => deployer.deploy(Contract1,contract2.address)) 


};

//deployer.deploy(ECCMath).then( () => { 
//  	deployer.deploy(Secp256k1, ECCMath.address).then((deployer) => {
//          	  deployer.deploy(AnonymousVoting, "0xe621e9f37252493e1eb14ecb0a57711f5e6acc3d", 1, ECCMath.address, Secp256k1.address)})})};
