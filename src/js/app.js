App = {
    web3Provider: null,
    contracts: {},
    account: "0x0",
    hasVoted: false,

    init: async function () {
        return await App.initWeb3();
    },

    initWeb3: async function () {
        /*
         * Replace me...
         */
        if (typeof web3 !== "undefinded") {
            App.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            App3.web3Provider = new Web3.providers.HttpProvider(
                "http://localhost:7545"
            );
            web3 = new Web3(App.Web3Provider);
        }
        return App.initContract();
    },

    initContract: function () {
        /*
         * Replace me...
         */
        $.getJSON("MyLandContract.json", function (house) {
            // Instantiate a new truffle contract from artifact
            App.contracts.MyLandContract = TruffleContract(house);
            // Connect provider to interact with contract
            App.contracts.MyLandContract.setProvider(app.web3Provider);
            // App.listenForEvents();
            return App.render();
        });
    },

    render: function () {
        var houseInstance;
        var loader = $("#loader");
        var content = $("#content");

        loader.show();
        content.hide();

        ///
        web3.eth.getCoinbase(function (err, account) {
            if (err === null) {
                App.account = account;
                $("#accountAddress").html("Your Account: " + account);
                console.log("account : " + App.account);
                var accounts = web3.eth.getAccounts(0);
                console.log(web3.eth.accounts);
            }
        });

        // Load contract data
        App.contracts.MyLandContract.deployed()
            .then(function (instance) {
                houseInstance = instance;
                return houseInstance.getNoOfLands(App.account);
            })
            .then(function (result) {
                console.log("Total land: " + result);
            })
            .catch(function (error) {
                console.warn(error);
            });
    },

    addProperty: function () {
        var etherAddress = $("#etherAddress").val();
        var propLocation = $("#location").val();
        var propCost = $("#cost").val();

        App.contracts.MyLandContract.deployed()
            .then(function (instance) {
                return instance.addLand(etherAddress, propLocation, propCost);
            })
            .then(function (result) {
                console.log(result);
            })
            .catch(function (err) {
                console.error(err);
            });

        //
        App.contracts.MyLandContract.deployed()
            .then(function (instance) {
                houseInstance = instance;
                return houseInstance.getNoOfLands(App.account);
            })
            .then(function (result) {
                console.log("Total Land: " + result);
            })
            .catch(function (err) {
                console.warn(err);
            });
    },
};

$(function () {
    $(window).load(function () {
        App.init();
    });
});
