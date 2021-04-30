import React, { Component } from "react";
import "./sheetChar.css";

class SheetChar extends Component {

    getName () {
        console.log(this.props.class);
        return (this.props.class).toLowerCase();
    }

    render() {

        if (this.getName() === "barbarian") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/barbarian.png" alt="class" />
                </div>
            )
          }
        if (this.getName() === "bard") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/bard.png" alt="class" />
                </div>
            )}
        if (this.getName() === "cleric") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/cleric.png" alt="class" />
                </div>
            )}
        if (this.getName() === "druid") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/druid.png" alt="class" />
                </div>
            )}
        if (this.getName() === "fighter") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/fighter.png" alt="class" />
                </div>
            )}
        if (this.getName() === "monk") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/monk.png" alt="class" />
                </div>
            )}
        if (this.getName() === "paladin") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/paladin.png" alt="class" />
                </div>
            )}
        if (this.getName() === "ranger") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/ranger.png" alt="class" />
                </div>
            )}
        if (this.getName() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/rogue.png" alt="class" />
                </div>
            )}
        if (this.getName() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/rogue.png" alt="class" />
                </div>
            )}
        if (this.getName() === "sorcerer") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/sorcerer.png" alt="class" />
                </div>
            )}
        if (this.getName() === "wizard") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/wizard.png" alt="class" />
                </div>
            )}
        if (this.getName() === "warlock") {
            return (
                <div className="character-class-preview">
                    <img  className="torso" src="static/icons/warlock.png" alt="class" />
                </div>
            )
        } else {
            return (
                <div className="unknown">
                    <img className="torso" src="static/icons/mystery.png" alt="unchosen class" />
                </div>
            )
        }

    }
}

export default SheetChar;

//                      <img  style={{filter: "hue-rotate(90deg)"}} className="head" src={this.currentHeadChoice()} />
