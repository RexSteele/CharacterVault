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
      expect(x.charName).to.equal(characterNames[0]);
    });
    it("Should create a new random sheet", async () => {
      await expect(CVinstance.createRandomSheet(characterNames[1], classes[1], races[1]))
        .to.emit(CVinstance, "NewSheet")

      const x = await CVinstance.sheets(0);
      console.log(x);
      expect(x.charName[0]).to.not.equal(attributes[0]);
      expect(x.level).to.equal(1);
    });
  });

  describe("Transfer a sheet", function() {
    it("Should transfer a sheet", async () => {
      await expect(CVinstance.createRandomSheet(characterNames[1], classes[1], races[1]))
          .to.emit(CVinstance, "NewSheet")

      const sheetId = 0;
      await CVinstance.transferFrom(alice.address, bob.address, sheetId);
      const newOwner = await CVinstance.ownerOf(sheetId);
      expect(newOwner).to.equal(bob.address);
    });
  });

  describe("Two-step transfer scenario", async () => {
    it("should approve and then transfer a sheet when the approved address calls transferFrom", async () => {
      await expect(CVinstance.createRandomSheet(characterNames[1], classes[1], races[1]))
          .to.emit(CVinstance, "NewSheet")

      const sheetId = 0;
      await CVinstance.approve(bob.address, sheetId);
      await CVinstance.connect(bob).transferFrom(alice.address, bob.address, sheetId);
      const newOwner = await CVinstance.ownerOf(sheetId);
      expect(newOwner).to.equal(bob.address);
    })

    it("should approve and then transfer a sheet when the owner calls transferFrom", async () => {
      await expect(CVinstance.createRandomSheet(characterNames[1], classes[1], races[1]))
          .to.emit(CVinstance, "NewSheet")

      const sheetId = 0;
      await CVinstance.approve(bob.address, sheetId);
      await CVinstance.transferFrom(alice.address, bob.address, sheetId);
      const newOwner = await CVinstance.ownerOf(sheetId);
      expect(newOwner).to.equal(bob.address);
    })
  })

  describe('Sheet level up and stat changes', async () => {
    it("Should be able to level sheet up", async () => {
      await CVinstance.setCooldownTime(0);
      await CVinstance.createRandomSheet(characterNames[1], classes[1], races[1]);
      const sheetId = 0;
      await CVinstance.levelUp(sheetId);
      await CVinstance.changeStr(sheetId,100);
      const s = await CVinstance.sheets(0);
      expect(s.level).to.equal(2);
      expect(s.Str).to.equal(100);
    })
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
