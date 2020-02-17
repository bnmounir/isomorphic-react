import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchUsers } from '../../actions';

export class UsersList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }
    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        });
    }
    headTag() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} User loaded to App`}</title>
                <meta property='og:title' content='User APP' />
            </Helmet>
        );
    }
    render() {
        return (
            <div>
                {this.headTag()}
                <h1>List of users: </h1>
                {this.renderUsers()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    component: connect(mapStateToProps, { fetchUsers })(UsersList),
    loadData
};
