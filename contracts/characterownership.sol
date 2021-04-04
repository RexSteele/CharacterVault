pragma solidity >=0.5.0 <0.6.0;

import "./erc721.sol";
import "./safemath.sol";

contract CharacterOwnership is ERC721 {

    using SafeMath for uint256;

    mapping (uint => address) characterApprovals;

    function balanceOf(address _owner) external view returns (uint256) {
        return ownerCharacterCount[_owner];
    }

    function ownerOf(uint256 _tokenId) external view returns (address) {
        return characterToOwner[_tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) private {
        ownerCharacterCount[_to] = ownerCharacterCount[_to].add(1);
        ownerCharacterCount[msg.sender] = ownerCharacterCount[msg.sender].sub(1);
        characterToOwner[_tokenId] = _to;
        emit Transfer(_from, _to, _tokenId);
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external payable {
        require (characterToOwner[_tokenId] == msg.sender || characterApprovals[_tokenId] == msg.sender);
        _transfer(_from, _to, _tokenId);
    }

    function approve(address _approved, uint256 _tokenId) external payable onlyOwnerOf(_tokenId) {
        characterApprovals[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);
    }

}
