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
          <SheetChar name={this.props.sheet.sheetName} />{" "}
        </div>
        <Card.Header>
          Level: <b>{this.props.sheet.sheetLevel}</b> <br /> Race :{" "}
          <b>{this.truncate(this.props.sheet.sheetRace, 8, 8)}</b>
        </Card.Header>
        <Card.Description>
          sheetId={this.props.sheet.sheetId}
          sheetName={this.props.sheet.sheetName}
          sheetRace={this.props.sheet.sheetRace}
          sheetClass={this.props.sheet.sheetClass}
          sheetLevel={this.props.sheet.sheetLevel}
          sheetStr={this.props.sheet.sheetStr}
          sheetDex={this.props.sheet.sheetDex}
          sheetCon={this.props.sheet.sheetCon}
          sheetInt={this.props.sheet.sheetInt}
          sheetWis={this.props.sheet.sheetWis}
          sheetCha={this.props.sheet.sheetCha}
          sheetReadyTime={this.props.sheet.sheetReadyTime}
          sheetOwner={this.props.sheet.sheetOwner}
        </Card.Description>
      </Card.Content>
    );
  }
}
export default SheetCardContent;
