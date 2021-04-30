import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

// Create an action button with link

class ActionButton extends Component {
  // format long names and addresses into xxxx...xxxx form

  truncate = (text, startChars, endChars) => {
    if (text.length > 12) {
      var start = text.substring(0, startChars);
      var end = text.substring(text.length - endChars, text.length);
      return start + "..." + end;
    }
    return text;
  };

  render() {
    const sheetData = {
      sheetName: this.truncate(this.props.data.sheetName, 8, 8),
      sheetRace: this.props.data.sheetRace,
      sheetClass: this.props.data.sheetClass,
      sheetLevel: this.props.data.sheetLevel,
      sheetStr: this.props.data.sheetStr,
      sheetDex: this.props.data.sheetDex,
      sheetCon: this.props.data.sheetCon,
      sheetInt: this.props.data.sheetInt,
      sheetWis: this.props.data.sheetWis,
      sheetCha: this.props.data.sheetCha,
      sheetReadyTime: this.props.data.sheetReadyTime,
    };

    const pathName = this.props.pathname;
    const buttonLabel = this.props.buttonLabel;

    //console.log("button label", this.props.buttonLabel, pathName, sheetData);
    return (
      <Link
        to={{
          pathname:  pathName ,
          state:  sheetData
        }}
      >
        <Button primary disabled={this.props.disableMe}> {buttonLabel} </Button>
      </Link>
    );
  }
}

export default ActionButton;
