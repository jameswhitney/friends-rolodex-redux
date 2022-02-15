import React, { Component } from "react";
import Scroll from "./components/scroll.component";
import CardList from "./components/cardlist.component";
import SearchBox from "./components/searchbox.component";
import Spinner from "./components/spinner.component";

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

  onSearchChange = (event) => {
    return this.setState({ searchField: event.target.value });
  };

  render() {
    const { users, searchField } = this.state;
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(searchField.toLowerCase());
    });
    return !users.length ? (
      <Spinner />
    ) : (
      <div className="tc">
        <h1>Friends Rolodex</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList users={filteredUsers} />
        </Scroll>
      </div>
    );
  }
}

export default App;
