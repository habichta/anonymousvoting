var ECCMath = artifacts.require("./ECCMath.sol");
var Secp256k1 = artifacts.require("./Secp256k1.sol")
var AnonymousVoting = artifacts.require("./AnonymousVoting.sol")
var LocalCrypto = artifacts.require("./LocalCrypto.sol")

module.exports = (deployer) => {
deployer.deploy(ECCMath)
deployer.deploy(Secp256k1,ECCMath.address)
deployer.deploy(AnonymousVoting,"0xf96a9431fd3e80a05afc61525d478d492183f76a",1,ECCMath.address,Secp256k1.address)
}
