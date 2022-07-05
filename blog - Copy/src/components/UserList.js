import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userId);
    console.log(this.props.user);
  }

  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (!user) return;
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
