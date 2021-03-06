import React, { Component } from "react";
import initBlockchain from "./utils/initBlockchain";
import getSheetCount from "./utils/getSheetCount";

import { HashRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Provider } from "react-redux";

import TopBar from "./components/TopBar";

import Greeting from "./pages/Greeting";
import MySheetInventory from "./pages/MySheetInventory";
import SheetInventory from "./pages/SheetInventory";
import LevelUp from "./pages/LevelUp";
import TransferSheet from "./pages/TransferSheet";
import AlterAbility from "./pages/AlterAbility";

import store from "./redux/store";

class App extends Component {

    componentDidMount = async () => {
      try {
          const CVInfo = await initBlockchain(); // from utils directory;  connect to provider and to metamask or other signer
          await getSheetCount(CVInfo.CV, CVInfo.userAddress); // get user count and total count of sheets
      } catch (error) {
          // Catch any errors for any of the above operations.
          alert(`Failed to load provider, signer, or contract. Check console for details.`);
          console.log(error);
      }
    };


  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Container>
            <TopBar state={this.state} />
            <div>
              <Route exact path="/" component={Greeting} />
              <Route
                exact
                path="/mySheetInventory"
                component={MySheetInventory}
              />
              <Route
                exact
                path="/SheetInventory"
                component={SheetInventory}
              />
              <Route exact path="/LevelUp" component={LevelUp} />
              <Route exact path="/TransferSheet" component={TransferSheet} />
              <Route exact path="/AlterAbility" component={AlterAbility} />
            </div>
          </Container>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
