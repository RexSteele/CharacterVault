import React, { Component } from "react";

class Greeting extends Component {
  render() {
    const imgStyle = {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      width: "50%"
    };

    return (
      <div>
        <br />
        <h2 style={{ color: "DarkRed", textAlign: "center" }}>
          {" "}
          Welcome to <b> Character Vault</b>, where your imagination is forever!
        </h2>
        <br />
        <img src="static/images/DND_Icon.jpg" style={imgStyle} width="400px" alt="D&D Icon" />
        <br /> <br />
        <p style={{ textAlign: "center" }}>
        <b>This application allows you to create  and store on a blockhain virtual
        character sheets to keep track of your class, race, stats, and other abilities across
        tabletop roleplaying games. No more scrambling to find a that handwritten paper you stuffed in the bottom
        of your backpack to find what Aragorn's Strength modifier, or if he still has that health potion from last session!
        Even better, now you just need your key and the rest is handled on the Ethereum blockchain.</b>
        <br /> Once created, your character can level up and stats can be increased (or decreased, if you have a nasty DM) at will.
        <br /> <br /> To get started, Click "Create Character" on the topbar in the top left.
        </p>
      </div>
    );
  }
}

export default Greeting;
