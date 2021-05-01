//
// This is the "Alter Ability" page
//

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Header, Icon, Form, Message } from "semantic-ui-react";
import SheetCard from "../components/sheetCard";
import mutant from "./mutant.jpg"


function mapStateToProps(state) {
  return {
    web3Instance: state.web3Instance,
    CV: state.CV,
    userAddress: state.userAddress,
    str: "",
    dex: "",
    con: "",
    int: "",
    wis: "",
    cha: ""
  };
}

class AlterAbility extends Component {
  state = {
    message: "",
    errorMessage: "",
    loading: false,
    sheetId: null
  };

  async componentDidMount() {
    let id = this.props.location.state.sheetId;
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
      if(!isNaN(this.state.str)) {
        await this.props.CV
          .changeStr(this.state.sheetId, parseInt(this.state.str));
        this.setState({
          loading: false,
          message: "Stitching muscles"
        });
      }
      if(!isNaN(this.state.dex)) {
        console.log(this.state.dex);
        console.log(parseInt(this.state.dex));
        await this.props.CV
          .changeDex(this.state.sheetId, parseInt(this.state.dex));
        this.setState({
          loading: false,
          message: "Acrobatic prowess"
        });
      }
      if(!isNaN(this.state.con)) {
        await this.props.CV
          .changeCon(this.state.sheetId, parseInt(this.state.con));
        this.setState({
          loading: false,
          message: "Hearty living"
        });
      }
      if(!isNaN(this.state.int)) {
        await this.props.CV
          .changeInt(this.state.sheetId, parseInt(this.state.int));
        this.setState({
          loading: false,
          message: "Book reading"
        });
      }
      if(!isNaN(this.state.wis)) {
        await this.props.CV
          .changeWis(this.state.sheetId, parseInt(this.state.wis));
        this.setState({
          loading: false,
          message: "Street learning"
        });
      }
      if(!isNaN(this.state.cha)) {
        await this.props.CV
          .changeCha(this.state.sheetId, parseInt(this.state.cha));
        this.setState({
          loading: false,
          message: "Beauty sleep"
        });
      }
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
          content="Malleable beings of mortal flesh..."
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
                src={mutant}
                width="400px"
                alt="mutant"
              />
            </th>
          </tr>
        </table>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Strength</label>
            <input
                placeholder="Strength"
                onChange={event =>
                    this.setState({
                      str: event.target.value
                    })
                }
            />
          </Form.Field>
          <Form.Field>
            <label>Dexterity</label>
            <input
                placeholder="Dexterity"
                onChange={event =>
                    this.setState({
                      dex: event.target.value
                    })
                }
            />
          </Form.Field>
          <Form.Field>
              <label>Constitution</label>
              <input
                  placeholder="Constitution"
                  onChange={event =>
                      this.setState({
                          con: event.target.value
                      })
                  }
              />
          </Form.Field>
          <Form.Field>
              <label>Intelligence</label>
              <input
                  placeholder="Intelligence"
                  onChange={event =>
                      this.setState({
                          int: event.target.value
                      })
                  }
              />
          </Form.Field>
          <Form.Field>
              <label>Wisdom</label>
              <input
                  placeholder="Wisdom"
                  onChange={event =>
                      this.setState({
                          wis: event.target.value
                      })
                  }
              />
          </Form.Field>
          <Form.Field>
              <label>Charisma</label>
              <input
                  placeholder="Charisma"
                  onChange={event =>
                      this.setState({
                          cha: event.target.value
                      })
                  }
              />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary type="submit" loading={this.state.loading}>
            <Icon name="check" />
            Transmorgify!
          </Button>
          <Message error header="Oops!" content={this.state.errorMessage} />
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

export default connect(mapStateToProps)(AlterAbility);
