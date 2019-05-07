import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Player from './pages/index/player/Player'
import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Error from './pages/Error'
import Navbar from './pages/index/Navbar'

class App extends Component {
	render() {
		return (

			<BrowserRouter>
					<Route path="/(player)" component={Navbar}/>
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path='/login' component={Login}/>
					<Route path="/player" component={Player} />
					<Route component={Error} />
				</Switch>
			</BrowserRouter>

		)
	}
}

export default App