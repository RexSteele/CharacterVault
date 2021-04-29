import React, { Component } from "react";
import "./zombieChar.css";

class SheetChar extends Component {

    catMode () {
       return (this.props.sheetClass);
    }

    render() {

        if (this.catMode() === "barbarian") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/barbarian.png" alt="class" />
                </div>
            )
          }
        if (this.catMode() === "bard") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/bard.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "cleric") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/cleric.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "druid") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/druid.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "fighter") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/fighter.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "monk") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/monk.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "paladin") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/paladin.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "ranger") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/ranger.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/rogue.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/rogue.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "sorcerer") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/sorcerer.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "wizard") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/wizard.png" alt="class" />
                </div>
            )}
        if (this.catMode() === "warlock") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/warlock.png" alt="class" />
                </div>
            )
        } else {
            return (
                <div className="unknown"monk>
                    <img className="left-feet" src="static/icons/mystery.png" alt="unchosen class" />
                </div>
            )
        }

    }
}

export default SheetChar;

//                      <img  style={{filter: "hue-rotate(90deg)"}} className="head" src={this.currentHeadChoice()} />
