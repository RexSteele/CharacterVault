pragma solidity >=0.5.0 <0.6.0;
import "./ownable.sol";
import "./safemath.sol";

contract SheetGenerator is Ownable {

    using SafeMath for uint256;
    using SafeMath32 for uint32;
    using SafeMath16 for uint16;

    uint randNonce = 0;

    event NewSheet(uint sheetId, string charName, string race, string class);

    struct calculated_attributes {
      string gender;
      uint16 age;
      string height;
      uint16 weight;
      string hair;
      string eyes;
      string homeland;
      string deity;
      string alignment;
      uint16 Armorclass;
      int savingthrows;
      uint16 level;
    }

    struct Sheet {
        string charName;
        string race;
        string class;

        uint16 Str;
        uint16 Dex;
        uint16 Con;
        uint16 Int;
        uint16 Wis;
        uint16 Cha;
        calculated_attributes calc;
        // uint[] attributes;
        // uint16 level;
        // uint32 currentExp;
        // uint32 neededExp;
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

    //function default_custom_attributes(calculated_attributes memory c) public view returns (bool) {
    //  c =  calculated_attributes("Gender", 0, "height", 0, "hair", "eyes", "homeland", "deity", "alignment", 0, 0, 1);
    //  return true;
    //}

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

    function createSheet(string memory _charName, string memory _race, string memory _class, uint16 _Str, uint16 _Dex, uint16 _Con, uint16 _Int, uint16 _Wis, uint16 _Cha) public {
        calculated_attributes memory c = calculated_attributes("Gender", 0, "height", 0, "hair", "eyes", "homeland", "deity", "alignment", 0, 0, 1);
        uint id = sheets.push(Sheet(_charName, _race, _class, _Str, _Dex, _Con, _Int, _Wis, _Cha, c)) - 1;
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
