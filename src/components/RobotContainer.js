import React, { Component } from 'react';
import { connect } from "react-redux";
import Robot from "./Robot";

class RobotContainer extends Component {
  render() {
    const { users, searchTerm } = this.props;
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="robot-container">
        {filteredUsers.map((user) => (
          <Robot key={user.id} name={user.name} email={user.email} id={user.id} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchTerm: state.robotReducer.searchTerm // Map the searchTerm state from the Redux store
});

export default connect(mapStateToProps)(RobotContainer);