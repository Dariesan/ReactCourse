import React from "react";
import { connect } from "react-redux/es/exports";
import { fetchUsers } from "../actions";
import PostList from "./PostList";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props);
  }

  render() {
    return <div></div>;
  }
}

const mapToStateProps = (state) => {
  return { users: state.users };
};

export default connect(mapToStateProps, { fetchUsers })(UserList);
