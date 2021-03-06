pragma solidity >=0.5.0 <0.6.0;

import "./ownable.sol";
import "./safemath.sol";

contract SheetGenerator is Ownable {

    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;

    uint randNonce = 0;
    uint16 startLevel = 1;
    uint cooldownTime = 2 minutes; // 1 days;

    event NewSheet(uint sheetId, string charName, string race, string class);

    struct Sheet {
        string charName;
        string race;
        string class;

        uint16 level;

        uint16 Str;
        uint16 Dex;
        uint16 Con;
        uint16 Int;
        uint16 Wis;
        uint16 Cha;

        uint32 readyTime;

        // uint[] attributes;
        // uint16 level;
        // uint32 currentExp;
        // uint32 neededExp;
        //
        //
        // uint16 bonusStr;
        // uint16 bonusDex;
        // uint16 bonusCon;
        // uint16 bonusInt;
        // uint16 bonusWis;
        // uint16 bonusCha;
        //
        // uint16 inspiration;
        // uint16 proficiency;
        // uint16 armorClass;
        // uint16 initiative;
        // uint16 speed;
        // uint16 totalHp;
        // uint16 hitDice;
        //
        // bool[] savingThrows; //True if saving throw is applicable, False if not, in order of abilities on sheet
    }

    function attributeBonuses(uint16  attribute_score) public view returns(int) {
     if(attribute_score >= 24)
     {
       return 7;
     }
     if(attribute_score >= 22)
     {
       return 6;
     }
     if(attribute_score >= 20)
     {
       return 5;
     }
     if(attribute_score >= 18)
     {
       return 4;
     }
     if(attribute_score >= 16)
     {
       return 3;
     }
     if(attribute_score >= 14)
     {
       return 2;
     }
     if(attribute_score >= 12)
     {
       return 1;
     }
     if(attribute_score >= 10)
     {
       return 0;
     }
     if(attribute_score >= 8)
     {
       return -1;
     }
     if(attribute_score >= 6)
     {
       return -2;
     }
     if(attribute_score >= 4)
     {
       return -3;
     }
     if(attribute_score >= 2)
     {
       return -4;
     }
     return -5;
    }

    Sheet[] public sheets;
    mapping (uint => address) public sheetToOwner;
    mapping (address => uint) ownerSheetCount;

    function setCooldownTime(uint _seconds) public onlyOwner {
        cooldownTime = _seconds;
    }

    function createSheet(string memory _charName, string memory _race, string memory _class, uint16 _Str, uint16 _Dex, uint16 _Con, uint16 _Int, uint16 _Wis, uint16 _Cha) public {
        uint id = sheets.push(Sheet(_charName, _race, _class, startLevel, _Str, _Dex, _Con, _Int, _Wis, _Cha, uint32(now + cooldownTime))) - 1;
        sheetToOwner[id] = msg.sender;
        ownerSheetCount[msg.sender] = ownerSheetCount[msg.sender].add(1);
        emit NewSheet(id, _charName, _race, _class);
    }

    function createRandomSheet(string memory _charName, string memory _race, string memory _class) public {
        createSheet(_charName, _race, _class, uint16(randMod(6)), uint16(randMod(6)), uint16(randMod(6)), uint16(randMod(6)), uint16(randMod(6)), uint16(randMod(6)));
    }

    function randMod(uint _modulus) internal returns(uint) {
        randNonce = randNonce.add(1);
        uint randomNum;
        for(uint i = 0; i < 3; i++){
          randomNum += (uint(keccak256(abi.encodePacked(now, msg.sender, randNonce))) % _modulus) + 1;
        }
        return randomNum;
    }

}
