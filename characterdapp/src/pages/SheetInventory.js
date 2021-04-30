import React, { Component } from "react";
import {
  Card,
  Grid,
  Input,
  Segment,
  Pagination,
} from "semantic-ui-react";
import { connect } from "react-redux";

import SheetCard from "../components/sheetCard";

function mapStateToProps(state) {
  return {
    CV: state.CV,
    totalSheetCount: state.totalSheetCount,
    userAddress: state.userAddress
  };
}

class SheetInventory extends Component {
  state = {
    SheetTable: [],
    activePage: 1,
    totalPages: Math.ceil(this.props.totalSheetCount / 9)
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
  }

  makeSheetCards = async () => {
    let sList = [];
    let sOwner = [];
    await this.setState({ sheetTable: [] }); // clear screen while waiting for data
    for (
      let i = this.state.activePage * 9 - 9;
      i < this.state.activePage * 9;
      i++
    ) {
      try {
        let metaData = await this.props.CV.sheets(i);
        sList.push(metaData);
        let myOwner = await this.props.CV.sheetToOwner(i);
        sOwner.push(myOwner);
      } catch (err) {
        break;
      }
    }

    // create a set of sheet cards in the state table
    let sheetTable = [];
    for (let i = 0; i < sList.length; i++) {
      let myDate = new Date(sList[i].readyTime * 1000).toLocaleString();
      sheetTable.push(
        <SheetCard
          key={i}
          sheetId={i.toString()}
          sheetName={sList[i].charName}
          sheetRace={sList[i].race}
          sheetClass={sList[i].class}
          sheetStr={sList[i].str}
          sheetDex={sList[i].dex}
          sheetCon={sList[i].con}
          sheetInt={sList[i].int}
          sheetWis={sList[i].wis}
          sheetCha={sList[i].cha}
          sheetReadyTime={myDate}
          sheetOwner={sOwner[i]}
          myOwner={this.props.userAddress === sOwner[i]}
        />
      );
    }
    this.setState({ sheetTable });
  };

  render() {
    return (
      <div>
        <hr />
        <h2> Complete Sheet Inventory </h2>
        The sheets you own have a purple background; clicking anywhere on a
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
        <div>
          <Card.Group>{this.state.sheetTable}</Card.Group>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SheetInventory);
