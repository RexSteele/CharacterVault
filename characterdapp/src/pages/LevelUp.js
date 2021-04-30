//
// This is the "Level Up" page
//

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Header, Icon, Form, Message } from "semantic-ui-react";
import SheetCard from "../components/sheetCard";

import { ethers } from "ethers";

function mapStateToProps(state) {
  return {
    web3Instance: state.web3Instance,
    CV: state.CV,
    userAddress: state.userAddress
  };
}

class LevelUp extends Component {
  state = {
    value: "",
    message: "",
    errorMessage: "",
    loading: false,
    sheetId: null
  };

  async componentDidMount() {
    let sheetId = +this.props.location.state.sheetId;
    this.setState({
      sheetId
    });
  }

  onSubmit = async event => {
    event.preventDefault();
    this.setState({
      loading: true,
      errorMessage: "",
      message: "waiting for blockchain transaction to complete..."
    });
    try {
      await this.props.CV
        .levelUp(this.state.sheetId, {value: ethers.utils.parseEther(".001")})
      this.setState({
        loading: false,
        message: "PHENOMINAL COSMIC POWER...itty bitty living space."
      });
    } catch (err) {
      this.setState({
        loading: false,
        errorMessage: err.message,
        message: "User rejected transaction"
      });
    }
  };

  render() {
    return (
      <div>
        *
        <Header
          icon="browser"
          content="GO FORTH AND GAIN EXPERIENCE!  Then come back to level me up! It only costs .001 ether."
        />
        <table>
          <tr>
            <th>
              <SheetCard
                key={this.props.key}
                sheetId={this.props.toString()}
                sheetName={this.props.location.state.name}
                sheetRace={this.props.location.state.race}
                sheetClass={this.props.location.state.class}
                sheetLevel={this.props.location.state.level}
                sheetStr={this.props.location.state.sheetStr}
                sheetDex={this.props.location.state.sheetDex}
                sheetCon={this.props.location.state.sheetCon}
                sheetInt={this.props.location.state.sheetInt}
                sheetWis={this.props.location.state.sheetWis}
                sheetCha={this.props.location.state.sheetCha}
                sheetReadyTime={this.props.myDate}
                sheetOwner={this.props.sheetOwner}
              />
            </th>
            <th>
              <img
                src="static/images/DND_levelup.jpg"
                width="400px"
                alt="LevelUp"
              />
            </th>
          </tr>
        </table>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary type="submit" loading={this.state.loading}>
            <Icon name="check" />
            Level up!
          </Button>
          <Link to="/MySheetInventory">
            <Button color="red" inverted>
              <Icon name="cancel" /> Close
            </Button>
          </Link>
          <hr />
          <h2>{this.state.message}</h2>
        </Form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LevelUp);
