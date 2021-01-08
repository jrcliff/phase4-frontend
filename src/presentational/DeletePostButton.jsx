import React from 'react';
import { Button, Icon } from 'semantic-ui-react'

const DeletePostButton = (props) => {
    return (
        <div>
            <Button onClick={() => props.handleDelete(props.post)} animated>
            <Button.Content visible>Delete</Button.Content>
            <Button.Content hidden>
                <Icon name='trash' />
            </Button.Content>
            </Button>
          
        </div>
    );
}

export default DeletePostButton;
