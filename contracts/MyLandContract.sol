pragma solidity ^0.5.11;
contract MyLandContract
{
    //This contract is for real estate 
    uint public totalLandsCounter;


    struct Land
    {
        address ownerAddress;
        string location;
        uint cost;
        uint landID;
        uint wantSell;
    }

    
    // Land myLand = Land (0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2,1, 1)
    mapping(address => Land[]) public __ownedLands;

    constructor() public
    {
        totalLandsCounter = 0;
        
    }

    function getNumberofLands() public view returns (uint)
    {   
        //totalLandsCounter++;
        return totalLandsCounter;
    }

    //declaring an event 
    event Add(address _owner, uint _landID);
    
    // to add the property
    function addLand(address propertyOwner, string memory _location, uint _cost) public returns(uint)
    {
        totalLandsCounter = totalLandsCounter +1;
        Land memory  myLand = Land({
            ownerAddress: propertyOwner,
            location: _location,
            cost : _cost,
            landID :totalLandsCounter,
            wantSell: 1

            
        });
        __ownedLands[propertyOwner].push(myLand);
        emit Add(propertyOwner, totalLandsCounter);

        return totalLandsCounter;
    }

    function getNoOfLands(address _landHolder) public view returns(uint)
    {
        uint index;
        index = __ownedLands[_landHolder].length;

        return index;
    }

    function getTotlaLandCounter() public view returns(uint)
    {
        return totalLandsCounter;
    }
    
    
}