import logo from "./logo.svg";
import "./App.css";
import Demo from "./Demo";
import { useState } from "react";
import { Condition, Field } from "./types";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";

function App() {
  
      
  return (
    <div className="App">
      <div className="builder">
      <Demo />
      </div>
      
    </div>
  );
}

export default App;
