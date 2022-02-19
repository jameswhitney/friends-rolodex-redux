import React, { Component } from "react";
import { connect } from "react-redux";
import Scroll from "./components/scroll.component";
import CardList from "./components/cardlist.component";
import SearchBox from "./components/searchbox.component";
import Spinner from "./components/spinner.component";

import { setSearchField, requestFriends } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.onRequestFriends();
  }

  render() {
    const { onSearchChange, users, searchField, isPending } = this.props;
    const filteredUsers = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <Spinner />
    ) : (
      <div className="tc">
        <h1>Friends Rolodex</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList users={filteredUsers} />
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.searchFriends.searchField,
    users: state.requestFriends.users,
    isPending: state.requestFriends.isPending,
    error: state.requestFriends.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestFriends: () => dispatch(requestFriends()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
