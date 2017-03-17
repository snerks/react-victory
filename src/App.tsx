import * as React from 'react';
import './App.css';
import { VictoryBar } from "victory";

// const logo = require('./logo.svg');
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class App extends React.Component<null, null> {
  render() {
    return (
      <VictoryBar
        data={data}
        // data accessor for x values
        x="quarter"
        // data accessor for y values
        y="earnings"
      />
    );
  }
}

export default App;
