import React, { Component } from "react";
import { Card, Icon, Image } from "semantic-ui-react";

export default class Usercards extends Component {
  state = {
    selectedFile: null
  }
  
  fileUploadHandler = () => {
    let fd = new FormData()
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    fetch(`http://localhost:3000/users/1`, {method: 'POST'})
    .then(res => console.log(res))
  }

  fileHandler = event => {
    this.setState({selectedFile: event.target.files[0]});
  }
  
  render() {
    return (
      <div>
        <Card>
          <input type='file' onChange={this.fileHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
          <Image src={this.props.user.profilepic} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{console.log(this.props.user.username)}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

