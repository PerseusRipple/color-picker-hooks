import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Random Rainbow</h1>
        </header>
        <ColorPicker />
      </>
    );
  }
}

export default App;
