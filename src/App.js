import React from "react";
import "./App.css";
import Counter from "./components/counter/Counter";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Counter />
      </React.Fragment>
    </Provider>
  );
};

export default App;
