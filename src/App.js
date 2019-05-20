import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Player from './pages/index/player/Player'
import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Singup from './pages/singup/Singup'
import Convites from './pages/convites/Convites'
import Error from './pages/Error'
import Navbar from './pages/index/Navbar'
import BottomNavigationComponent from './pages/index/BottomNavigationComponent'
import Admin from './pages/index/admin/Admin'
import { Hidden, Grid } from '@material-ui/core';

class App extends Component {
	render() {
		return (

			<BrowserRouter>
				<Route path="/(player|admin|convites)" component={Navbar}/>
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path='/login' component={Login}/>
					<Route path='/singup' component={Singup}/>
					<Route path='/convites' component={Convites}/>
					<Route path='/admin' component={Admin}/>
					<Route path="/player" component={Player} />
					<Route component={Error} />
				</Switch>
				<Hidden smUp><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/(player|admin)" component={BottomNavigationComponent}/></Grid></Hidden>
			</BrowserRouter>

		)
	}
}

export default App