import React, { Component } from "react";
import getSheetCount from "../utils/getSheetCount";
import { connect } from "react-redux";
import character_img from "./generic_character.png";
import { Button, Header, Icon, Modal, Form, Message } from "semantic-ui-react";

function mapStateToProps(state) {
    return {
        CV: state.CV,
        userAddress: state.userAddress,
        userSheetCount: state.userSheetCount
    };
}


// Create a new Sheet

class CreateRandomSheet extends Component {
    state = {
        modalOpen: false,
        name: "",
        race: "",
        class: "",
        message: "",
        errorMessage: "",
        loading: false
    };

    handleOpen = () => this.setState({ modalOpen: true });

    handleClose = () => this.setState({ modalOpen: false });

    onSubmit = async event => {
        event.preventDefault();
        this.setState({
            loading: true,
            errorMessage: "",
            message: "waiting for blockchain transaction to complete..."
        });
        try {
            await this.props.CV.createRandomSheet(this.state.name, this.state.race, this.state.class) // contains the sheet name
            this.setState({
                loading: false,
                message: "You have created a New Sheet"
            });
            getSheetCount(this.props.CV, this.props.userAddress);
        } catch (err) {
            this.setState({
                loading: false,
                errorMessage: err.message,
                message: "User rejected transaction or else this account is already in use, please try another name."
            });
        }
    };


    render() {
        return (
            <Modal
                trigger={
                    <Button color='primary' onClick={this.handleOpen}>
                        Character with Random Stats
                    </Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
            >
                <Header icon="browser" content="Create a New Character Sheet" />
                <Modal.Content>
                    <img src={character_img} alt="sheet warrior" /><Header> Enter your character's name,
                    race, and class and generate random character attributes to be stored in the
                    Character Vault.<br/><br/> Your name, race, and class are permanent!</Header>
                    <br /> <br />
                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>Character Name</label>
                            <input
                                placeholder="Name"
                                onChange={event =>
                                    this.setState({
                                        name: event.target.value
                                    })
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Character Race</label>
                            <input
                                placeholder="Race"
                                onChange={event =>
                                    this.setState({
                                        race: event.target.value
                                    })
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Character Class</label>
                            <input
                                placeholder="Class"
                                onChange={event =>
                                    this.setState({
                                        class: event.target.value
                                    })
                                }
                            />
                        </Form.Field>
                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button primary type="submit" loading={this.state.loading}>
                            <Icon name="check" />
                            Create Sheet
                        </Button>
                        <hr />
                        <h2>{this.state.message}</h2>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="red" onClick={this.handleClose} inverted>
                        <Icon name="cancel" /> Close
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default connect(mapStateToProps)(CreateRandomSheet);
