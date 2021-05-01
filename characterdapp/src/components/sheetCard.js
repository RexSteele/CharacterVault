import React, { Component } from "react";
import { Icon, Card, Header, Modal, Button } from "semantic-ui-react";
import ReactTooltip from "react-tooltip";
import ActionButton from "./ActionButton";
import SheetCardContent from "./sheetCardContent";

class SheetCard extends Component {
  state = {
    modalOpen: false
  };

  modalOpen() {
    this.setState({ modalOpen: true });
  }

  handleClose = () => this.setState({ modalOpen: false });

  truncate = (text, startChars, endChars) => {
    if (text.length > 25) {
      var start = text.substring(0, startChars);
      var end = text.substring(text.length - endChars, text.length);
      return start + "..." + end;
    }
    return text;
  };

  render() {
    // define the button labels used in <ActionButton> further on down in the code

    const levelUpButton = (
      <div>
        Level Up
        <br /> {" "}
      </div>
    );
    const transferSheetButton = (
        <div>
          Transfer Sheet <br /> :({" "}
        </div>
    );
    const alterAbilityButton = (
        <div>
          Alter Ability Score <br /> {" "}
        </div>
    );

    // create the JSX depending on whether you own the sheet or not

    if (this.props.myOwner)
      // Owner sheet: render card and tooltip and modal for sheet actions

      return (
        <Card style={{ backgroundColor: "#301934" }} raised>
          <ReactTooltip delayShow={400} />

          <a
            href="javascript:;"
            data-tip="Click on me to view actions for this sheet"
            onClick={e => this.modalOpen(e)}
          >
            <SheetCardContent sheet={this.props} />
          </a>

          {/* a modal is like an "alert", it's a popup that greys out the lower screen and displays its content on top of everything */}

          <Modal open={this.state.modalOpen} onClose={this.handleClose}>
            <Header
              icon="browser"
              content="These are the actions you can take with your sheet!"
            />

            <Modal.Content>

              <ActionButton
                pathname="/LevelUp"
                buttonLabel={levelUpButton}
                data={this.props}
              />

              <ActionButton
                pathname="/TransferSheet"
                buttonLabel={transferSheetButton}
                data={this.props}
              />

              <ActionButton
                pathname="/AlterAbility"
                buttonLabel={alterAbilityButton}
                data={this.props}
              />

            </Modal.Content>

            <Modal.Actions>
              <Button color="red" onClick={this.handleClose} inverted>
                <Icon name="cancel" /> Close
              </Button>
            </Modal.Actions>
          </Modal>
        </Card>
      );
    // someone else's sheet.
    else
      return (
        <Card style={{ backgroundColor: "CadetBlue" }}>
          <SheetCardContent sheet={this.props} />
        </Card>
      );
  }
}

export default SheetCard;
