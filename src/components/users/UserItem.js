import React, { Component } from 'react'

export class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'mojombo'
        }
    }

    render() {
        return (
            <div className="card text-center">
                <h3>{this.state.login}</h3>
                <div>
                    <a href="" className="btn btn-dark btn-sm my-1">click</a>
                </div>
            </div>
        )
    }
}

export default UserItem
