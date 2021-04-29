import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import sheetChar from "./sheetChar";

class SheetCardContent extends Component {
  truncate = (text, startChars, endChars) => {
    if (text.length > 12) {
      var start = text.substring(0, startChars);
      var end = text.substring(text.length - endChars, text.length);
      return start + "..." + end;
    }
    return text;
  };

  render() {
    return (
      <Card.Content>
        <div>
          {" "}
          <SheetChar Character Name={this.props.sheet.charName} />{" "}
        </div>
        <Card.Header>
          Level: <b>{this.props.sheet.level}</b> <br /> Name :{" "}
          <b>{this.truncate(this.props.sheet.charName, 8, 8)}</b>
        </Card.Header>
        <Card.Description>
          Race: {this.props.sheet.race} <br />
          Class: {this.props.sheet.class} <br />
          Str: {this.props.sheet.str} <br />
          Dex: {this.props.sheet.dex} <br />
          Con: {this.props.sheet.con} <br />
          Int: {this.props.sheet.int} <br />
          Wis: {this.props.sheet.wis} <br />
          Cha: {this.props.sheet.cha} <br />
        </Card.Description>
      </Card.Content>
    );
  }
}
export default SheetCardContent;
