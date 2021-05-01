import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import SheetChar from "./sheetChar";

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
          <SheetChar class={this.props.sheet.sheetClass} />{" "}
        </div>
        <Card.Header>
          Level: <b>{this.props.sheet.sheetLevel}</b> <br /> Name :{" "}
          <b>{this.truncate(this.props.sheet.sheetName, 8, 8)}</b>
        </Card.Header>
        <Card.Description>
          Id: {this.props.sheet.sheetId} <br />
          Name: {this.props.sheet.sheetName} <br />
          Race: {this.props.sheet.sheetRace} <br />
          Class: {this.props.sheet.sheetClass} <br />
          Level: {this.props.sheet.sheetLevel} <br />
          Str: {this.props.sheet.sheetStr} <br />
          Dex: {this.props.sheet.sheetDex} <br />
          Con: {this.props.sheet.sheetCon} <br />
          Int: {this.props.sheet.sheetInt} <br />
          Wis: {this.props.sheet.sheetWis} <br />
          Cha: {this.props.sheet.sheetCha} <br />
          ReadyTime: {this.props.sheet.sheetReadyTime} <br />
          Owner: {this.truncate(this.props.sheet.sheetOwner, 12, 12)}
        </Card.Description>
      </Card.Content>
    );
  }
}
export default SheetCardContent;
