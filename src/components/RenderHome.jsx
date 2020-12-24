import React, { Component } from 'react'
import Usercards from '../containers/Usercards'

export default class RenderHome extends Component {
    renderUsers = () => {
        let usersArr = this.props.users
        return usersArr.map((user, index) => <Usercards user={user} key={index}/>)
    }


    render() {
        return (
            <div>
                {this.renderUsers()}
            </div>
        )
    }
}
