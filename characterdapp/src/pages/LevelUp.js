//
// This is the "Level Up" page
//

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Header, Icon, Form, Message } from "semantic-ui-react";
import SheetCard from "../components/sheetCard";
import levelup from "./level_up.jpg"


function mapStateToProps(state) {
  return {
    web3Instance: state.web3Instance,
    CV: state.CV,
    userAddress: state.userAddress
  };
}

class LevelUp extends Component {
  state = {
    message: "",
    errorMessage: "",
    loading: false,
    sheetId: null
  };

  async componentDidMount() {
    let id = this.props.location.state.sheetId;
    console.log(id);
    this.setState({
      sheetId: id
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
        .levelUp(this.state.sheetId)
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
          content="GO FORTH AND GAIN EXPERIENCE!  Then come back to level me up!"
        />
        <table>
          <tr>
            <th>
              <SheetCard
                sheetId={this.state.sheetId}
                sheetName={this.props.location.state.sheetName}
                sheetRace={this.props.location.state.sheetRace}
                sheetClass={this.props.location.state.sheetClass}
                sheetLevel={this.props.location.state.sheetLevel}
                sheetStr={this.props.location.state.sheetStr}
                sheetDex={this.props.location.state.sheetDex}
                sheetCon={this.props.location.state.sheetCon}
                sheetInt={this.props.location.state.sheetInt}
                sheetWis={this.props.location.state.sheetWis}
                sheetCha={this.props.location.state.sheetCha}
                sheetReadyTime={this.props.location.state.sheetReadyTime}
                sheetOwner={this.props.userAddress}
                myOwner={false}
              />
            </th>
            <th>
              <img
                src={levelup}
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
