import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions'

class UserListPage extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    render() {
        return (
        <div>
            User List:
            <ul>{this.renderUsers()}</ul>
        </div>)
    }
}

function mapStateToProps(state) {
    return { users: state.users }
}

function initData(store) {
    return store.dispatch(fetchUsers())
}

export default {
    initData,
    component: connect(mapStateToProps, { fetchUsers })(UserListPage)
}