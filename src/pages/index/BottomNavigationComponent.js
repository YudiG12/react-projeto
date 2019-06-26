import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {NavLink} from 'react-router-dom'
import { Person, StarBorderOutlined } from '@material-ui/icons';

const styles = {
  root: {
    backgroundColor: '#383c42',
    width: '100%',
    color: '#96a0a0',
    "&$selected": {
      color: "#ff3f3f"
    }
  },
  selected: {},
}

class BottomNavigationComponent extends React.Component {
  state = {
    value: this.props.location.pathname
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const actionClasses = this.props.classes;
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation style={{position: 'fixed',bottom:'0'}} value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction component={NavLink} to='/player' label="Convites" value="/player" classes={actionClasses} icon={<StarBorderOutlined />} />
        <BottomNavigationAction component={NavLink} to='/administro' label="Administrados" value="/administro" classes={actionClasses} icon={<StarBorderOutlined />} />
      </BottomNavigation>
    );
  }
}

BottomNavigationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigationComponent);