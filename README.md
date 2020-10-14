# Deploy Contract UI

Steps
* Develop ui
* Connect UI to JS
* Connect JS to Solidity

## Prerequisite
* (Truffle Suite](https://www.trufflesuite.com/tutorials/pet-shop)

```
$ npm install -g truffle

$ mkdir <projectfolder>
$ cd <projectfolder>

// create sample project
$ truffle unbox pet-shop

```

* Create local ethereum Environment
  + [Ganach-CLI](https://www.trufflesuite.com/ganache)
  
* Metamask (Custom RPC)
  + Network name : `http://127.0.0.1:7545`
  + New RPC URL  : `http://127.0.0.1:7545`
  
* Connect Ganache to Metamask `http://localhost:7545`

* Import account from Ganache to Metamask

## Code intergration
* add contract.sol to `contracts` folder

* build/compile the contract. This will create contract.json in build folder
```
$ truffle compile
```

* create 2_deploy_contracts.js in `migrations` folder
* compile
```
$ truffle migrate
```

* Prepare HTML UI under `src` folder
  + index.html
  + js/app.js
  
* Run the project
```
$ npm run dev
```
