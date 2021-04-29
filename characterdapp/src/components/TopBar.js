import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Button } from "semantic-ui-react";

import CreateZombie from "./CreateZombie";

import { Menu, Header } from "semantic-ui-react";

function mapStateToProps(state) {
  return {
    userAddress: state.userAddress,
    userZombieCount: state.userZombieCount,
    totalZombieCount: state.totalZombieCount
  };
}

// This renders the topbar on the webpage as well as the lines listing address and zombie count.

class TopBar extends Component {
  render() {
    return (
      <div>
        <Menu style={{ marginTop: "10px", backgroundColor: "LightGreen" }}>
          <Menu.Item>
            <CreateZombie />
          </Menu.Item>

          <Menu.Item>
            <Link to={{ pathname: "/myZombieInventory" }}>
              <Button primary>View Saved Sheets</Button>
            </Link>
          </Menu.Item>

          <Menu.Item>
            <Link to={{ pathname: "/ZombieInventory" }}>
              <Button primary>Show All Sheets in the Vault</Button>
            </Link>
          </Menu.Item>

          <Menu.Item position="right">
            <Link to={{ pathname: "/" }}>
              <Header size="large">CharacterVault </Header>
            </Link>
          </Menu.Item>
        </Menu>
        <div className="center">
          <h2>The place where your imagination is forever!</h2>
        </div>
        Your current account address: {this.props.userAddress}
        <br />
        You have {this.props.userZombieCount} character sheets out of a {this.props.totalZombieCount} in the vault.
        <hr />
      </div>
    );
  }
}

export default connect(mapStateToProps)(TopBar);
