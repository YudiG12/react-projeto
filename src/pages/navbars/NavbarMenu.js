import React from 'react';
import {NavLink} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Person } from '@material-ui/icons';
import logout from './../../scripts/http/login'

function NavbarMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
    // logout.logout()
    var date = new Date();
    document.cookie = "carbontower= ; expires = " + date
    window.location.href = "/login"
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        style= {{
          color:'#96a0a0',
          height:'100%',
        }}
      >
        
        <Person style={{ marginLeft: '5px' }} />
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem component={NavLink} to='/login' onClick={handleClose}>Sair</MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarMenu;
