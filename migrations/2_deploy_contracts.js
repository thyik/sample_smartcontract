const MyLandContract = artifacts.require("MyLandContract");

module.exports = function (deployer) {
    deployer.deploy(MyLandContract);
};
