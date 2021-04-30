import React, { Component } from "react";
import "./sheetChar.css";

class SheetChar extends Component {

    getName () {
       return (this.props.name).toLowerCase();
    }

    render() {

        if (this.getName() === "barbarian") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/barbarian.png" alt="class" />
                </div>
            )
          }
        if (this.getName() === "bard") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/bard.png" alt="class" />
                </div>
            )}
        if (this.getName() === "cleric") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/cleric.png" alt="class" />
                </div>
            )}
        if (this.getName() === "druid") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/druid.png" alt="class" />
                </div>
            )}
        if (this.getName() === "fighter") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/fighter.png" alt="class" />
                </div>
            )}
        if (this.getName() === "monk") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/monk.png" alt="class" />
                </div>
            )}
        if (this.getName() === "paladin") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/paladin.png" alt="class" />
                </div>
            )}
        if (this.getName() === "ranger") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/ranger.png" alt="class" />
                </div>
            )}
        if (this.getName() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/rogue.png" alt="class" />
                </div>
            )}
        if (this.getName() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/rogue.png" alt="class" />
                </div>
            )}
        if (this.getName() === "sorcerer") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/sorcerer.png" alt="class" />
                </div>
            )}
        if (this.getName() === "wizard") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/wizard.png" alt="class" />
                </div>
            )}
        if (this.getName() === "warlock") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="./icons/warlock.png" alt="class" />
                </div>
            )
        } else {
            return (
                <div className="unknown">
                    <img className="torso" src="./icons/mystery.png" alt="unchosen class" />
                </div>
            )
        }

    }
}

export default SheetChar;

//                      <img  style={{filter: "hue-rotate(90deg)"}} className="head" src={this.currentHeadChoice()} />
