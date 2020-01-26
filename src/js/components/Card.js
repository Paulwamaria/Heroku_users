import React, { Component , useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/action';


function Card(userData,fetchUsers) {
    useEffect(() => {
    fetchUsers()
},[])
    return userData.loading ? (
        <h3>Loading </h3>
    ) : userData.error ? (
    <h3>{userData.error}</h3>
    ): ( 
        <div>
            <h3>User List</h3> &&
            userData.users
        </div>
    )
}


const mapStateToProps = state => {

    return {
        userData: state.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)


