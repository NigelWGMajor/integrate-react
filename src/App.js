import logo from "./logo.svg";
import "./App.css";
import React from 'react'
import { Navbar, Button, Alignment } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">
        <Navbar className="bp4-dark">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Electron Snip</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="settings" text="Settings" />
            <Button className="bp3-minimal" icon="help" text="About" />
          </Navbar.Group>
        </Navbar>
      <header className="App-header">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
