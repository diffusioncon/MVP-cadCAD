pragma solidity ^0.5.10;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./token/ImpactToken.sol";

contract Solartainer is Ownable {
    uint256 totalFundsDAI;
    mapping (address => bool) authorizedTokens;
    address BCY;
    mapping (address => uint256) communityBalancesBCY;
    uint256 currentTotalKwHour;
    uint256 maxTotalKwHour;
    uint256 startingPrice;
    uint256 maxPrice;
    address oracle;
    address impactToken;

    constructor (uint256 _startingPrice, uint256 _maxPrice, uint256 _maxTotalKwHour, address _oracle, address _impactToken) public {
        startingPrice = _startingPrice;
        maxPrice = _maxPrice;
        maxTotalKwHour = _maxTotalKwHour;
        oracle = _oracle;
        impactToken = _impactToken;
    }

    function authorizeToken(address token) external returns (bool) {
        authorizedTokens[token] = true;
        return true;
    }

    function prepayFunds(address token, uint256 value) external returns (bool) {
        // value is is `token` and should be converted to BCY with oracle
        require(authorizedTokens[token] == true);

        uint256 balanceBCY = value * 1; // rate should be variable

        communityBalancesBCY[msg.sender] += balanceBCY;

        return true;
    }

    function mintKwHour(uint256 kwHour) external returns (bool) {
        require(currentTotalKwHour + kwHour <= maxTotalKwHour);

        currentTotalKwHour += kwHour;

        return true;
    }

    function burnKwHour(address account, uint256 valueKwHour) external returns (bool) {
        uint256 valueBCY = valueKwHour * (startingPrice + (startingPrice * currentTotalKwHour / maxTotalKwHour));

        communityBalancesBCY[account] -= valueBCY;
        _distributeImpactTokens(account, valueKwHour);

        return true;
    }

    function _distributeImpactTokens(address account, uint256 value) internal {
        ImpactToken(impactToken).mint(account, value);
    }
}