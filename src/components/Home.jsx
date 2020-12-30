import React, { Component } from 'react'
import RenderHome from './RenderHome'
import Timeline from '../containers/Timeline'
import RenderTimeline from './RenderTimeline'

export default class Home extends Component {
    state = {
        users: [],
        posts: []
    }

    componentDidMount(){
        // let url = "http://localhost:3000/users"
        // fetch(url)
        // .then(response => response.json())
        // .then(usersArr => this.setState({
        //     users: usersArr
        // }))

        // let posturl = "http://localhost:3000/posts"
        // fetch(posturl)
        // .then(resp => resp.json())
        // .then(postArr => this.setState({
        //     posts: postArr
        // }))

        let url = "http://localhost:3000/userposts"
        fetch(url)
        .then(resp => resp.json())
        .then(usersArr => this.setState({
            users: usersArr
        }))
    }


    render() {
        return (
            <div>
                <RenderHome />
                <RenderTimeline users={this.state.users}/>
            </div>
        )
    }
}
