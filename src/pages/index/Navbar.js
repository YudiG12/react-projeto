import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { StarBorderOutlined, ExitToApp,Mail, Inbox } from '@material-ui/icons'

class Navbar extends Component{
  render() {
    return (

    <div>
      <div>
      <div />
      <Divider />
      <List>
        <ListItem button key={'Campeonatos'}>
          <ListItemIcon> <StarBorderOutlined /> </ListItemIcon>
          <ListItemText primary='Campeonatos' />
        </ListItem>
        <ListItem component={NavLink} to='/' button key={'Sair'}>
          <ListItemIcon> <ExitToApp /> </ListItemIcon>
          <ListItemText primary='Sair' />
        </ListItem>
      </List>
    </div>
    </div>

    )
  }
}

export default Navbar