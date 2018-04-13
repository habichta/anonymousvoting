var ECCMath = artifacts.require("./ECCMath.sol");
var Secp256k1 = artifacts.require("./Secp256k1.sol")
var AnonymousVoting = artifacts.require("./AnonymousVoting.sol")
var LocalCrypto = artifacts.require("./LocalCrypto.sol")

module.exports = (deployer) => {

deployer.deploy(LocalCrypto)
.then(() => LocalCrypto.deployed())
.then(() => deployer.deploy(ECCMath))
.then(() => ECCMath.deployed())
.then((eccmath) => { deployer.deploy(Secp256k1,eccmath.address)
.then(() => Secp256k1.deployed())
.then((secp256k1) => deployer.deploy(AnonymousVoting,"0xf96a9431fd3e80a05afc61525d478d492183f76a",1,eccmath.address,secp256k1.address))
.then(() => AnonymousVoting.deployed())
})

}

//deployer.deploy(ECCMath).then(function(){ 

//return deployer.deploy(Secp256k1,ECCMath.address);
//} );

//};

//deployer.deploy(ECCMath).then( () => { 
//  	deployer.deploy(Secp256k1, ECCMath.address).then((deployer) => {
//          	  deployer.deploy(AnonymousVoting, "0xe621e9f37252493e1eb14ecb0a57711f5e6acc3d", 1, ECCMath.address, Secp256k1.address)})})};
