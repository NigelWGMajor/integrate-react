import logo from "./logo.svg";
import "./App.css";
import { Navbar, Button, Alignment } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">
        <Navbar className="bp3-dark">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
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
