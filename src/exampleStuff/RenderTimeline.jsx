import React, { Component } from 'react'
import Timeline from '../containers/Timeline'

export default class RenderTimeline extends Component {
    renderUsers = () => {
        let usersArr = this.props.users
        return usersArr.map((user, index) => <Timeline user={user} key={index}/>)
    }
//       mapPosts = () => {
//     let userArr = this.props.users
//     let x = userArr.map((user) => {return user.posts)
//     x.forEach(post => {
//         console.log(post.body)
//     });
//     console.log(x);
//     // .map((post) => <Timeline post={post}/>)
//   }

    render() {
        return (
            <div>
                {this.renderUsers()}
                {/* {this.mapPosts()} */}
            </div>
        )
    }
}
