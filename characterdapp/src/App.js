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

import store from "./redux/store";

//
//  This is the main application page; routing is handled to render other pages in the application

class App extends Component {
  // define a state variable for important connectivity data to the blockchain
  // this will then be put into the REDUX store for retrieval by other pages

  // **************************************************************************
  //
  // React will call this routine only once when App page loads; do initialization here
  //
  // **************************************************************************


    componentDidMount = async () => {
      try {
          const CVInfo = await initBlockchain(); // from utils directory;  connect to provider and to metamask or other signer
          await getSheetCount(CVInfo.CV, CVInfo.userAddress); // get user count and total count of zombies
      } catch (error) {
          // Catch any errors for any of the above operations.
          alert(`Failed to load provider, signer, or contract. Check console for details.`);
          console.log(error);
      }
    };





  // **************************************************************************
  //
  // main render routine for App component;
  //      contains route info to navigate between pages
  //
  // **************************************************************************

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
            </div>
          </Container>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
