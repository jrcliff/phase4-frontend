import React, { Component } from 'react'
import Usercards from '../containers/Usercards'

export default class RenderHome extends Component {
    // renderUsers = () => {
    //     let usersArr = this.props.users
    //     return usersArr.map((user, index) => <Usercards user={user} profilepic={user.profile_pic} key={user.id}/>)
    // }


    render() {
        return (
            <div>
                {this.props.users.map((user, index) => <Usercards user={user} id={user.id} key={index}/> )}
            </div>
        )
    }
}
