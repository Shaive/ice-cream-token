pragma solidity 0.6.1;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "./ERC20Mintable.sol";

contract MyToken is ERC20Mintable {
  constructor() ERC20Mintable("IceCream Token", "ISCREAM") public {
    //_setupDecimals(0);
  }
}