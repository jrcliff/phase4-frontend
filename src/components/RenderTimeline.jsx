import React, { Component } from 'react'
import Timeline from '../containers/Timeline'

export default class RenderTimeline extends Component {
    renderPosts = () => {
        let postsArr = this.props.posts
        return postsArr.map((post) => <Timeline post={post} key={post.id}/>)
    }
    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}
