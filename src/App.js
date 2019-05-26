import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Player from './pages/index/player/Player'
import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Singup from './pages/singup/Singup'
import Convites from './pages/index/convites/Convites'
import Error from './pages/Error'
import Navbar from './pages/index/Navbar'
import BottomNavigationComponent from './pages/index/BottomNavigationComponent'
import Admin from './pages/index/admin/Admin'
import Streams from './pages/index/admin/Streams'

import { Hidden, Grid } from '@material-ui/core';

class App extends Component {
	render() {
		return (

			<BrowserRouter>
				<Route path="/(player|admin|streams|convites)" component={Navbar}/>
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path='/login' component={Login}/>
					<Route path='/singup' component={Singup}/>
					<Route path='/convites' component={Convites}/>
					<Route path='/admin' component={Admin}/>
					<Route path="/player" component={Player} />
					<Route path="/streams" component={Streams}/>
					<Route component={Error} />
				</Switch>
				<Hidden smUp><Route path="/(player|admin|streams|convites)" render={() => <div style={{height:'56px', width: '100%'}} />}/><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/(player|admin|streams|convites)" component={BottomNavigationComponent}/></Grid></Hidden>
			</BrowserRouter>

		)
	}
}

export default App