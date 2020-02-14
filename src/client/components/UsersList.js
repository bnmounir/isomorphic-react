import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    render() {
        return (
            <div>
                <h1>List of users: </h1>
                {this.renderUsers()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData() {
    console.log('loadinggggggg');
}
export { loadData };

export default connect(mapStateToProps, { fetchUsers })(UsersList);
