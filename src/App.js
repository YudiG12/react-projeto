import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Player from './components/index/player/Player'
import Index from './components/index/Index'
import Login from './components/login/Login'
import Error from './components/Error'
import Navbar from './components/index/Navbar'

class App extends Component {
	render() {
		return (

			<BrowserRouter>
				<div>
					<Navbar />
				<Switch>
					<Route path="/" exact component={Index} />
					<Route path='/login' component={Login}/>
					<Route path="/player" component={Player} />
					<Route component={Error} />
				</Switch>
				</div>
			</BrowserRouter>

		)
	}
}

export default App