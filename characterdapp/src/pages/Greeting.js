import React, { Component } from "react";
import vault from "./strongbox_clipart.jpg";
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
          Welcome to the <b>Character Vault </b>!
        </h2>
        <br />
        <img src={vault} style={imgStyle} alt="Image of Bank Vault " />
        <br /> <br />
        <p style={{ textAlign: "center"}}>
          <b>This CS458 blockchain application that allows you to create virtual
          character sheets to keep track of your class, race, stats, and other abilities across
          tabletop roleplaying games. No more scrambling to find a that handwritten paper you stuffed in the bottom
          of your backpack to find what Aragorn's Strength modifier was and whether he had from last session!
          Even better, now you just need your key and the rest is handled on the Ethereum blockchain.</b>
          <br /> Once created, your character can level up and stats can be increased (or decreased, if you have a nasty DM) at will.
          <br /> <br /> To get started, Click "Create Character" on the topbar in the top left.
        </p>
      </div>
    );
  }
}

export default Greeting;
