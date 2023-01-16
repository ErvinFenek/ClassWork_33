import React from "react";

import './App.css';

import {UserFrom} from "./components/UserFrom";
import {Container} from "./components/Container";

function App() {
  return <Container theme="dark">
            <UserFrom/>
         </Container>;
}


export default App;
