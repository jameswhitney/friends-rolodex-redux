import { Component } from "react/cjs/react.production.min";
import Card from "./components/card.component";

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>Friends Rolodex</h1>
        <Card />
      </div>
    );
  }
}

export default App;
