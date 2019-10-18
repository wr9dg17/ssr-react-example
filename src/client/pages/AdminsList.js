import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/index";
import withRequireAuth from "../hoc/requireAuth";

class AdminsList extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => {
            return <li key={admin.id}>{admin.name}</li>;
        });
    }

    render() {
        return (
            <div style={{ padding: "15px" }}>
                <h4>Protected list of admins</h4>
                <ul>{this.renderAdmins()}</ul>
            </div>
        );
    }
}

const loadData = store => {
    return store.dispatch(fetchAdmins());
};

const mapStateToProps = state => ({
    admins: state.admins
});

export default {
    loadData: loadData,
    component: connect(
        mapStateToProps,
        { fetchAdmins }
    )(withRequireAuth(AdminsList))
};
