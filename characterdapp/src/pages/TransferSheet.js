//
// This is the "Transfer Sheet" page
//

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Header, Icon, Form, Message } from "semantic-ui-react";
import sheetCard from "../components/sheetCard";

function mapStateToProps(state) {
    return {
        CV: state.CV,
        userAddress: state.userAddress
    };
}

// noinspection JSUnresolvedFunction
class TransferSheet extends Component {
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
            await this.props.CV.transferFrom(this.props.userAddress, this.state.value, this.state.sheetId) // contains the sheet ID and the new name
            this.setState({
                loading: false,
                message: "Send me to faraway land???"
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
                *<Header icon="browser" content="Please don't send me away" />
                <table>
                    <tr>
                        <th>
                            <sheetCard
                                sheetId={this.state.sheetId}
                                sheetName={this.props.location.state.name}
                                sheetRace={this.props.location.state.race}
                                sheetClass={this.props.location.state.class}
                                sheetLevel={this.props.location.state.level}
                                sheetStr={this.props.location.state.str}
                                sheetDex={this.props.location.state.dex}
                                sheetCon={this.props.location.state.con}
                                sheetInt={this.props.location.state.int}
                                sheetWis={this.props.location.state.wis}
                                sheetCha={this.props.location.state.cha}
                                sheetOwner={this.props.userAddress}
                                myOwner={false}
                            />
                        </th>
                        <th>
                            <img src="static/images/yuno.jpg" alt="please keep me" />
                        </th>
                    </tr>
                </table>
                <br />
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Transfer Character Sheet</label>
                        <input
                            placeholder="New owner address"
                            onChange={event =>
                                this.setState({
                                    value: event.target.value
                                })
                            }
                        />
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button primary type="submit" loading={this.state.loading}>
                        <Icon name="check" />
                        Transfer Character Sheet
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

export default connect(mapStateToProps)(TransferSheet);
