import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Restore from '@material-ui/icons/Restore';
import Favorite from '@material-ui/icons/Favorite';
import LocationOn from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: 500,
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
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const actionClasses = this.props.classes;
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Recents" value="recents" classes={actionClasses} icon={<Restore />} />
        <BottomNavigationAction label="Favorites" value="favorites" classes={actionClasses} icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" value="nearby" classes={actionClasses} icon={<LocationOn />} />
      </BottomNavigation>
    );
  }
}

BottomNavigationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNavigationComponent);