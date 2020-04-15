import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
import { Helmet } from "react-helmet";

class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
        });
    }

    render() {
        return (
            <div style={{ padding: "15px" }}>
                <Helmet>
                    <title>Users App</title>
                    <meta property="og:title" content="Users App" />
                </Helmet>

                <h4>Here's a big list of users</h4>
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}

const loadData = (store) => {
    return store.dispatch(fetchUsers());
};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default {
    loadData: loadData,
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
