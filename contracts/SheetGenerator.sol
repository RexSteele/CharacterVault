pragma solidity >=0.5.0 <0.6.0;

import "./ownable.sol";
import "./safemath.sol";

contract SheetGenerator is Ownable {

    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;

    event NewSheet(uint sheetId, string charName, string race, string class);

    struct Sheet {
        string charName;
        string race;

        uint16 level;
        uint32 currentExp;
        uint32 neededExp;

        uint16 strength;
        uint16 dexterity;
        uint16 constitution;
        uint16 intelligence;
        uint16 wisdom;
        uint16 charisma;

        uint16 bonusStr;
        uint16 bonusDex;
        uint16 bonusCon;
        uint16 bonusInt;
        uint16 bonusWis;
        uint16 bonusCha;

        uint16 inspiration;
        uint16 proficiency;
        uint16 armorClass;
        uint16 initiative;
        uint16 speed;
        uint16 totalHp;
        uint16 hitDice;

        bool[] savingThrows; //True if saving throw is applicable, False if not, in order of abilities on sheet
    }

    Sheet[] public sheets;

    mapping (uint => address) public sheetToOwner;
    mapping (address => uint) ownerSheetCount;

    function _createSheet(string memory _charName, string memory _race, string memory _class) internal {
        uint id = sheets.push(Sheet(_charName, _race, _class)) - 1;
        sheetToOwner[id] = msg.sender;
        ownerSheetCount[msg.sender] = ownerSheetCount[msg.sender].add(1);
        emit NewSheet(_charName, _name, _dna);
    }

}
