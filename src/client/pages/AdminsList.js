import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../actions';
import requireAuth from '../components/hoc/requireAuth';

export class AdminsList extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }
    renderAdminsList() {
        return this.props.admins.map(admin => (
            <li key={admin.id}>{admin.name}</li>
        ));
    }
    render() {
        return (
            <div>
                <h3>Protected Route</h3>
                <ul>{this.renderAdminsList()}</ul>
            </div>
        );
    }
}
function mapStateToProps({ admins }) {
    return { admins };
}

export default {
    component: connect(mapStateToProps, { fetchAdmins })(
        requireAuth(AdminsList)
    ),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
