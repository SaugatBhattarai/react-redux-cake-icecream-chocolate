import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
// import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ChocolateContainer from "./components/ChocolateContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer /> */}
        <h1>Stocks in My Store</h1>
        <hr />
        <h2>To dispatch actions based on the props send to component</h2>
        <div>====================</div>
        <ItemContainer cake />
        <ItemContainer />
        <hr />
        <CakeContainer />
        <IceCreamContainer />
        <ChocolateContainer />
        <NewCakeContainer />
        <hr />
      </div>
    </Provider>
  );
}

export default App;
