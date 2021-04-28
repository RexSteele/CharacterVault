pragma solidity >=0.5.0 <0.6.0;

import "./erc721.sol";
import "./safemath.sol";
import "./SheetGenerator.sol";
import "./SheetUpdate.sol";

contract SheetOwnership is SheetUpdate, ERC721 {

    using SafeMath for uint256;

    mapping (uint => address) Approvals;

    modifier onlyOwnerOf(uint _sheetId) {
      require(msg.sender == sheetToOwner[_sheetId]);
      _;
    }

    function balanceOf(address _owner) external view returns (uint256) {
        return ownerSheetCount[_owner];
    }

    function ownerOf(uint256 _tokenId) external view returns (address) {
        return sheetToOwner[_tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) private {
        ownerSheetCount[_to] = ownerSheetCount[_to].add(1);
        ownerSheetCount[msg.sender] = ownerSheetCount[msg.sender].sub(1);
        sheetToOwner[_tokenId] = _to;
        emit Transfer(_from, _to, _tokenId);
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external payable {
        require (sheetToOwner[_tokenId] == msg.sender || Approvals[_tokenId] == msg.sender);
        _transfer(_from, _to, _tokenId);
    }

    function approve(address _approved, uint256 _tokenId) external payable onlyOwnerOf(_tokenId) {
        Approvals[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);
    }

}
