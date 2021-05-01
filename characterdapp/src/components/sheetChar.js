import React, { Component } from "react";
import "./sheetChar.css";

class SheetChar extends Component {

    getName () {
        return (this.props.class).toLowerCase();
    }

    render() {

        if (this.getName() === "barbarian") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/barbarian.png" alt="class" />
                </div>
            )
          }
        if (this.getName() === "bard") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/bard.png" alt="class" />
                </div>
            )}
        if (this.getName() === "cleric") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/cleric.png" alt="class" />
                </div>
            )}
        if (this.getName() === "druid") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/druid.png" alt="class" />
                </div>
            )}
        if (this.getName() === "fighter") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/fighter.png" alt="class" />
                </div>
            )}
        if (this.getName() === "monk") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/monk.png" alt="class" />
                </div>
            )}
        if (this.getName() === "paladin") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/paladin.png" alt="class" />
                </div>
            )}
        if (this.getName() === "ranger") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/ranger.png" alt="class" />
                </div>
            )}
        if (this.getName() === "rogue") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/rogue.png" alt="class" />
                </div>
            )}
        if (this.getName() === "sorcerer") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/sorcerer.png" alt="class" />
                </div>
            )}
        if (this.getName() === "wizard") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/wizard.png" alt="class" />
                </div>
            )}
        if (this.getName() === "warlock") {
            return (
                <div className="character-class-preview">
                    <img  className="portrait" src="static/images/warlock.png" alt="class" />
                </div>
            )
        } else {
            return (
                <div className="character-class-preview">
                    <img className="portrait" src="static/images/mimic.png" alt="unchosen class" />
                </div>
            )
        }

    }
}

export default SheetChar;

//                      <img  style={{filter: "hue-rotate(90deg)"}} className="head" src={this.currentHeadChoice()} />
