import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import Error from './pages/Error'
import NavbarEmpresa from './pages/index/NavbarEmpresa'
import NavbarJogador from './pages/index/NavbarJogador'
import BottomNavigationComponent from './pages/index/BottomNavigationComponent'
import Partida from './pages/index/campeonato/Partida'
import Detalhes from './pages/index/campeonato/detalhes/Detalhes'
import Streams from './pages/index/company/streams/Streams'
import Championship from './pages/index/company/championship/Championship'
import Invite from './pages/index/player/invite/Invite'
import Campeonato from './pages/index/campeonatos/Campeonato'
import NovoTime from './pages/index/company/novoTime/NovoTime'
import { Hidden, Grid } from '@material-ui/core'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/(index)" exact component={Index} />
				<Route path="/(player|administro|campeonatos|campeonato|partida|detalhes|novotime)" component={NavbarJogador}/>
				<Route path="/empresa/(campeonatos|streams|times|campeonato|partida|detalhes|novotime)" component={NavbarEmpresa}/>
				<Switch>
					<Route path='/login' component={Login}/>
					<Route path='/signup' component={Signup}/>

					{/* Jogador */}
					<Route path="/" exact component={Index} />
					<Route path='/partida' component={Partida}/>
					<Route path='/detalhes' component={Detalhes}/>
					<Route path="/player" component={Invite} />
					<Route path="/campeonato" component={Campeonato}/>
					<Route path='/administro' component={Championship}/>

					{/* Empresa */}

					<Route path='/empresa/partida' component={Partida}/>
					<Route path='/empresa/detalhes' component={Detalhes}/>
					<Route path="/empresa/streams" component={Streams}/>
					<Route path="/empresa/campeonato" component={Campeonato}/>
					<Route path="/empresa/campeonatos" component={Championship}/>
					<Route path="/convite" component={Invite}/>
					<Route path="/empresa/novotime"component={NovoTime}/>
					<Route component={Error} />
				</Switch>
				<Hidden smUp><div style={{height:'56px',widht:'100%'}} /><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/(player|administro|campeonatos|campeonato|partida|detalhes|novotime)" component={BottomNavigationComponent}/></Grid></Hidden>
				<Hidden smUp><div style={{height:'56px',widht:'100%'}} /><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/empresa/(campeonatos|streams|times|campeonato|partida|detalhes|novotime)" component={BottomNavigationComponent}/></Grid></Hidden>
			</BrowserRouter>
		)
	}
}

export default App
