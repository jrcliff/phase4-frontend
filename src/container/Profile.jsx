import React, { Component } from 'react'
import UserCard from '../presentational/UserCard'

export default class Profile extends Component {
    

    render() {

        return (
            <div>
                <UserCard updateTimeline={this.props.updateTimeline} user={this.props.user}/>
            </div>
        )
    }
}
