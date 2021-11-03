import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import Header from "./components/Header";
import "./App.css";
import Todo from "./components/Todo";
import { configureStore } from "./redux/store";

const store = configureStore(window.__INITIAL_STATE__);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <div className="App">
          <Header/>
          <Todo/>
        </div>
      </ReduxProvider>
    );
  }
}

export default App;