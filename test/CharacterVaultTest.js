const { expect } = require("chai");
const {waffle} = require("hardhat");
const {deployContract} = waffle;
const provider = waffle.provider;

describe("CharacterVault", function() {

  const characterNames = ["Baldric", "Tevor"];
  const classes = ["Warrior", "Cleric"];
  const races = ["Human", "Dwarf"];
  const attributes = [10,10,10,10,10,10]
  let CV;
  let CVinstance;
  let alice;
  let bob;

  beforeEach(async function () {
    [alice, bob] = await ethers.getSigners();
    CV = await ethers.getContractFactory("CharacterVault");
    CVinstance = await CV.deploy();
  });

  describe("Deployment and sheet creation", function() {
    it("Should create a new sheet", async () => {
      await expect(CVinstance.createSheet(characterNames[0], classes[0], races[0], 1,2,3,4,5,6))
        .to.emit(CVinstance, "NewSheet")

      const x = await CVinstance.sheets(0);
      console.log(x);
      console.log(x.attributes);
      expect(x.charName).to.equal(characterNames[0]);
    });
    // it("Should create a new random sheet", async () => {
    //   await expect(CVinstance.createRandomSheet(characterNames[1], classes[1], races[1]))
    //     .to.emit(CVinstance, "NewSheet")
    //
    //   const x = await CVinstance.sheets(0);
    //   console.log(x.attributes);
    //   expect(x.charName[0]).to.not.equal(attributes[0]);
    // });
  });
})



// describe("Greeter", function() {
//   it("Should return the new greeting once it's changed", async function() {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//
//     await greeter.deployed();
//     expect(await greeter.greet()).to.equal("Hello, world!");
//
//     await greeter.setGreeting("Hola, mundo!");
//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });
