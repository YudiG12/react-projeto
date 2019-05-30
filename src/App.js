import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Player from './pages/index/player/Player'
import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Convites from './pages/index/convites/Convites'
import Error from './pages/Error'
import Navbar from './pages/index/Navbar'
import BottomNavigationComponent from './pages/index/BottomNavigationComponent'
import Campeonato from './pages/index/campeonato/Campeonato'
import Detalhes from './pages/index/campeonato/detalhes/Detalhes'
import Streams from './pages/index/company/streams/Streams'
import Championship from './pages/index/company/championship/Championship'
import Invite from './pages/index/player/invite/Invite'

import { Hidden, Grid } from '@material-ui/core'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/(index)" exact component={Index} />
				<Route path='(login)' component={Login}/>
				<Route path='(signup)' component={Signup}/>
				<Route path="/(player|campeonato|administro)" component={Navbar}/>
				<Route path="empresa/(campeonatos|stream|times)" component={Navbar}/>
				<Switch>
					<Route path='/convites' component={Convites}/>
					<Route path='/campeonato' component={Campeonato}/>
					<Route path='/detalhes' component={Detalhes}/>
					<Route path="/player" component={Player} />
					<Route path="/streams" component={Streams}/>
					<Route path="/campeonatos" component={Championship}/>
					<Route path="/convite" component={Invite}/>
					<Route component={Error} />
				</Switch>
				<Hidden smUp><div style={{height:'56px',widht:'100%'}} /><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/(player|campeonato|detalhes|streams|convites|campeonatos|convite)" component={BottomNavigationComponent}/></Grid></Hidden>
			</BrowserRouter>

		)
	}
}

export default App