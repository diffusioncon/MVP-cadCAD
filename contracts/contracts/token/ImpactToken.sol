pragma solidity ^0.5.10;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract  ImpactToken is ERC20 {
    constructor () public {
    }

    function mint(address account, uint256 value) external returns (bool) {
        _mint(account, value);
        return true;
    }

    function burn(address account, uint256 value) external returns (bool) {
        _burn(account, value);
        return true;
    }

}