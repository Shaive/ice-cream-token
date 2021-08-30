var MyToken = artifacts.require("MyToken");
var RoleLibrary = artifacts.require("Roles");
var MyTokenSale = artifacts.require("MyTokenSale");
var MyKycContract = artifacts.require("KycContract");
require("dotenv").config({path: "../.env"});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(RoleLibrary);
    await deployer.link(RoleLibrary,MyToken);
    await deployer.deploy(MyToken);
    await deployer.deploy(MyKycContract);
    await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, MyKycContract.address);
    let instance = await MyToken.deployed();
    instance.addMinter(MyTokenSale.address);
    instance.renounceMinter();

}