import React from "react";
import logo from "./logo.svg";
import "./App.css";

import InfraFactory from "./infra/InfraFactory";

import factoryRepository from "./app/FactoryRepository";

import ClientA from "./app/ClientA";
import ClientB from "./app/ClientB";

factoryRepository.setInfraFactory(new InfraFactory({ storeType: "OnMemory" }));

new ClientA().someMethod();
new ClientB().someMethod();
console.log("aldkjfa");

factoryRepository.getInfraFactory().getStore().showAll();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
