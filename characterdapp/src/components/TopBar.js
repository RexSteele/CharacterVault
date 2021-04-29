import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "semantic-ui-react";

import CreateSheet from "./CreateSheet";
import CreateRandomSheet from "./CreateRandomSheet";

import { Menu, Header } from "semantic-ui-react";

function mapStateToProps(state) {
  return {
    userAddress: state.userAddress,
    userSheetCount: state.userSheetCount,
    totalSheetCount: state.totalSheetCount
  };
}

// This renders the topbar on the webpage as well as the lines listing address and zombie count.

class TopBar extends Component {
  render() {
    return (
      <div>
        <Menu style={{ marginTop: "10px", backgroundColor: "Salmon" }}>
          <Menu.Item>
            <CreateSheet />
          </Menu.Item>

            <Menu.Item>
                <CreateRandomSheet />
            </Menu.Item>

          <Menu.Item>
            <Link to={{ pathname: "/mySheetInventory" }}>
              <Button primary>Show My Character Sheets</Button>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to={{ pathname: "/SheetInventory" }}>
              <Button primary>Show All Character Sheets</Button>
            </Link>
          </Menu.Item>

          <Menu.Item position="right">
            <Link to={{ pathname: "/" }}>
              <Header size="large">Character Vault Home</Header>
            </Link>
          </Menu.Item>
        </Menu>
        <div className="center">
          <h2>Keep your role-playing characters stored permanently on the Ethereum blockchain.</h2>
        </div>
        Your account address: {this.props.userAddress}
        <br />
        You own {this.props.userSheetCount} character sheet(s) out of a total of approximately {this.props.totalSheetCount}.
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps)(TopBar);
