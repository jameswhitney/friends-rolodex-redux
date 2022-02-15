import React, { Component } from "react";
import CardList from "./components/cardlist.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://randomuser.me/api/?results=20&nat=us,gb,fr,de&inc=name,email,picture`
    )
      .then((resp) => resp.json())
      .then((userData) => {
        return this.setState({
          users: userData.results.map((user) => {
            return {
              firstName: user.name.first,
              lastName: user.name.last,
              email: user.email,
              picture: user.picture.large,
            };
          }),
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { users } = this.state;
    return (
      <div className="tc">
        <h1>Friends Rolodex</h1>
        <CardList users={users} />
      </div>
    );
  }
}

export default App;
