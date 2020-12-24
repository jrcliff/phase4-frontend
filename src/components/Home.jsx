import React, { Component } from 'react'
import RenderHome from './RenderHome'

export default class Home extends Component {
    state = {
        users: []
    }

    componentDidMount(){
        let url = "http://localhost:3000/users"
        fetch(url)
        .then(response => response.json())
        .then(usersArr => this.setState({
            users: usersArr
        }))
    }


    render() {
        return (
            <div>
                <RenderHome users={this.state.users}/>
            </div>
        )
    }
}
