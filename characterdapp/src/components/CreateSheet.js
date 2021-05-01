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

class CreateSheet extends Component {
  state = {
    modalOpen: false,
    name: "",
    race: "",
    class: "",
    str:  0,
    dex: 0,
    con: 0,
    int: 0,
    wis: 0,
    cha: 0,
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
      await this.props.CV.createSheet(this.state.name, this.state.race, this.state.class, this.state.str,
          this.state.dex, this.state.con, this.state.int, this.state.wis, this.state.cha) // contains the sheet name
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
          <Button onClick={this.handleOpen}>
            Create Character
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Header icon="browser" content="Create a New Character Sheet" />
        <Modal.Content>
          <img src={character_img} alt="sheet warrior" /><Header> Enter your character's name,
          race, class, strength, dexterity, constitution, intelligence, wisdom, and charisma to put them in the
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

export default connect(mapStateToProps)(CreateSheet);
