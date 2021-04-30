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
          <SheetChar Character Name={this.props.sheetName} />{" "}
        </div>
        <Card.Header>
          Level: <b>{this.props.sheet.sheetLevel}</b> <br /> Race :{" "}
          <b>{this.truncate(this.props.sheet.sheetRace, 8, 8)}</b>
        </Card.Header>
        <Card.Description>
          key={this.props.key}
          sheetId={this.props.toString()}
          sheetName={this.props.sheetName}
          sheetRace={this.props.sheetRace}
          sheetClass={this.props.sheetClass}
          sheetLevel={this.props.sheetLevel}
          sheetStr={this.props.sheetStr}
          sheetDex={this.props.sheetDex}
          sheetCon={this.props.sheetCon}
          sheetInt={this.props.sheetInt}
          sheetWis={this.props.sheetWis}
          sheetCha={this.props.sheetCha}
          sheetReadyTime={this.props.sheetReadyTime}
          sheetOwner={this.props.sheetOwner}
        </Card.Description>
      </Card.Content>
    );
  }
}
export default SheetCardContent;
