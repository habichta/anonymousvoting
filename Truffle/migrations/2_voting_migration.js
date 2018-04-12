var ECCMath = artifacts.require("./ECCMath.sol");
var Secp256k1 = artifacts.require("./Secp256k1.sol")
var AnonymousVoting = artifacts.require("./AnonymousVoting.sol")

module.exports = (deployer) => {
deployer.deploy(ECCMath).then( (deployer) => { 
  	deployer.deploy(Secp256k1, ECCMath.address).then((deployer) => {
          	  deployer.deploy(AnonymousVoting, "0xe621e9f37252493e1eb14ecb0a57711f5e6acc3d", 1, ECCMath.address, Secp256k1.address)})})};
