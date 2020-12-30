import React, { Component } from 'react';
import Timeline from '../containers/Timeline'
import Usercards from '../containers/Usercards'


class Profile extends Component {
    render() {
        return (
            <div>
                <Usercards />
                <Timeline />
            </div>
        );
    }
}

export default Profile;