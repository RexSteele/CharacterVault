import React, { Component } from "react";
import { Card, Grid, Input, Segment, Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import SheetCard from "../components/sheetCard";

function mapStateToProps(state) {
  return {
    CV: state.CV,
    userSheetCount: state.userSheetCount,
    userAddress: state.userAddress
  };
}

class MySheetInventory extends Component {
  state = {
    SheetTable: [],
    activePage: 1,
    totalPages: Math.ceil(this.props.userSheetCount / 9)
  };

  componentDidMount = async () => {
    await this.makeSheetCards();
  };

  onChange = async (e, pageInfo) => {
    await this.setState({ activePage: pageInfo.activePage });
    this.makeSheetCards();
  };

  handleInputChange = async (e, { value }) => {
    await this.setState({ activePage: value });
    this.makeSheetCards();
  };
  makeSheetCards = async () => {
    const mySheets = await this.props.CV.getSheetsByOwner(this.props.userAddress);
    let sheetTable = [];
    for (
      var i = this.state.activePage * 9 - 9;
      i < this.state.activePage * 9;
      i++
    ) {
      try {
        let s = mySheets[i];
        let sheet = await this.props.CV.sheets(s);
        console.log(sheet);
        let myDate = new Date(sheet.readyTime * 1000).toLocaleString();
        sheetTable.push(
          <SheetCard
            key={s}
            sheetId={s.toString()}
            sheetName={sheet.charName}
            sheetRace={sheet.race}
            sheetClass={sheet.class}
            sheetLevel={sheet.level}
            sheetStr={sheet.Str}
            sheetDex={sheet.Dex}
            sheetCon={sheet.Con}
            sheetInt={sheet.Int}
            sheetWis={sheet.Wis}
            sheetCha={sheet.Cha}
            sheetReadyTime={myDate}
            sheetOwner={this.props.userAddress}
            myOwner={true}
          />
        );
      } catch {
        break;
      }
    }
    this.setState({ sheetTable });
  };

  render() {
    return (
      <div>
        <hr />
        <h2> Your Character Sheet Inventory </h2>
        The character sheets you own have a purple background; clicking anywhere on a
        purple card will bring up a list of actions you can perform.
        <hr />
        <Grid columns={2} verticalAlign="middle">
          <Grid.Column>
            <Segment secondary>
              <div>activePage: {this.state.activePage}</div>
              <Input
                min={1}
                max={this.state.totalPages}
                onChange={this.handleInputChange}
                type="range"
                value={this.state.activePage}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Pagination
              activePage={this.state.activePage}
              onPageChange={this.onChange}
              totalPages={this.state.totalPages}
            />
          </Grid.Column>
        </Grid>
        <br /> <br />
        <Card.Group> {this.state.sheetTable} </Card.Group>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MySheetInventory);
