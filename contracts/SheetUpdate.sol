pragma solidity >=0.5.0 <0.6.0;

import "./SheetGenerator.sol";

contract SheetUpdate is SheetGenerator{

    modifier onlyOwnerOf(uint _sheetId) {
        require(msg.sender == sheetToOwner[_sheetId]);
        _;
    }

    function _triggerCooldown(Sheet storage _sheet) internal {
        _sheet.readyTime = uint32(now + cooldownTime);
    }

    function _isReady(Sheet storage _sheet) internal view returns (bool) {
        return (_sheet.readyTime <= now);
    }

    function levelUp(uint _sheetId) external onlyOwnerOf(_sheetId) {
        Sheet storage mySheet = sheets[_sheetId];
        require(_isReady(mySheet));
        sheets[_sheetId].level = sheets[_sheetId].level.add(1);
        _triggerCooldown(mySheet);
    }

    function changeStr(uint _sheetId, uint16 _newStr) external onlyOwnerOf(_sheetId){
        sheets[_sheetId].Str = _newStr;
    }

    function changeDex(uint _sheetId, uint16 _newDex) external onlyOwnerOf(_sheetId) {
        sheets[_sheetId].Dex = _newDex;
    }

    function changeCon(uint _sheetId, uint16 _newCon) external onlyOwnerOf(_sheetId) {
        sheets[_sheetId].Con = _newCon;
    }

    function changeInt(uint _sheetId, uint16 _newInt) external onlyOwnerOf(_sheetId) {
        sheets[_sheetId].Int = _newInt;
    }

    function changeWis(uint _sheetId, uint16 _newWis) external onlyOwnerOf(_sheetId) {
        sheets[_sheetId].Wis = _newWis;
    }

    function changeCha(uint _sheetId, uint16 _newCha) external onlyOwnerOf(_sheetId) {
        sheets[_sheetId].Cha = _newCha;
    }

    function getSheetsByOwner(address _owner) external view returns(uint[] memory) {
        uint[] memory result = new uint[](ownerSheetCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < sheets.length; i++) {
            if (sheetToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
}
