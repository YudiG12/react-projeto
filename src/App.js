import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Index from './pages/index/Index'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import Error from './pages/Error'
import NavbarEmpresa from './pages/navbars/NavbarEmpresa'
import NavbarJogador from './pages/navbars/NavbarJogador'
import NavbarCampeonato from './pages/navbars/NavbarCampeonato'
import BottomNavigationComponent from './pages/index/BottomNavigationComponent'
import BottomNavigationComponentCampeonato from './pages/index/BottomNavigationComponentCampeonato'
import Partida from './pages/campeonato/detalhesChampionship/Partida'
import Detalhes from './pages/campeonato/detalhesChampionship/detalhes/Detalhes'
import Streams from './pages/empresa/streams/Streams'
import Championship from './pages/campeonato/championships/Championship'
import Invite from './pages/player/invite/Invite'
import Campeonato from './pages/campeonato/championship/Campeonato'
import CampeonatosParticipo from './pages/player/Campeonatos'
import CampeonatosAdministro from './pages/player/CampeonatoAdministro'
import NovoTime from './pages/empresa/novoTime/NovoTime'
import CriarCampeonato from './pages/campeonato/championship/CriarCampeonato'
import CriarPartida from './pages/campeonato/partida/CriarPartida'
import CriarConvite from './pages/campeonato/convite/CriarConvite'
import CriarTime from './pages/campeonato/team/CriarTeam'
import { Hidden, Grid } from '@material-ui/core'
import Slack from './pages/campeonato/championship/Slack'
import CampeonatoAdministrador from './pages/administrador/Campeonato'
import PartidaAdministrador from './pages/administrador/Partida'
import DetalhesAdministrador from './pages/administrador/Detalhes'
import CriarConviteAdministrador from './pages/administrador/CriarConvite'
import CriarTimeAdministrador from './pages/administrador/CriarTime'
import CriarPartidaAdministrador from './pages/administrador/CriarPartida'


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/(index)" exact component={Index} />
				<Route path="/(player|administro|campeonatos)" component={NavbarJogador}/>
				<Route path="/campeonato-administro" component={NavbarCampeonato}/>
				<Route path="/campeonato/(|partida|detalhes|criar/convite|criar/time|criar/partida)" component={NavbarCampeonato} />
				<Route path="/empresa/(campeonatos|slack|streams|criar/convite|criar/time|criar/campeonato|criar/partida|times|campeonato|partida|detalhes|novotime)" component={NavbarEmpresa}/>
				<Switch>
					<Route path='/login' component={Login}/>
					<Route path='/signup' component={Signup}/>

					{/* Administrador */}
					<Route path="/campeonato-administro/" component={CampeonatoAdministrador}/>
					<Route path='/campeonato/partida' component={PartidaAdministrador}/>
					<Route path='/campeonato/detalhes' component={DetalhesAdministrador}/>
					<Route path='/campeonato/criar/convite' component={CriarConviteAdministrador}/>
					<Route path='/campeonato/criar/time' component={CriarTimeAdministrador}/>
					<Route path='/campeonato/criar/partida' component={CriarPartidaAdministrador}/>


					{/* Jogador */}
					<Route path="/" exact component={Index} />
					<Route path="/player" component={Invite} />
					<Route path="/campeonatos" component={CampeonatosParticipo}/>
					<Route path='/administro' component={CampeonatosAdministro}/>

					{/* Empresa */}
					<Route path='/empresa/partida' component={Partida}/>
					<Route path="/empresa/slack" component={Slack}/>
					<Route path="/empresa/streams" component={Streams}/>
					<Route path="/empresa/criar/campeonato" component={CriarCampeonato}/>
					<Route path="/empresa/criar/partida" component={CriarPartida}/>
					<Route path="/empresa/criar/convite" component={CriarConvite}/>
					<Route path="/empresa/criar/time" component={CriarTime}/>
					<Route path="/empresa/campeonato" component={Campeonato}/>
					<Route path="/empresa/campeonatos" component={Championship}/>
					<Route path="/convite" component={Invite}/>
					<Route path="/empresa/novotime"component={NovoTime}/>
					<Route component={Error} />
				</Switch>
				<Hidden smUp><div style={{height:'56px',widht:'100%'}} /><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/(player|administro|campeonatos)" component={BottomNavigationComponent}/></Grid></Hidden>
				<Hidden smUp><div style={{height:'56px',widht:'100%'}} /><Grid container direction="row" justify="center" alignItems="flex-end"><Route path="/empresa/(campeonatos|slack|streams|criar/convite|criar/time|criar/campeonato|criar/partida|times|campeonato|partida|detalhes|novotime)" component={BottomNavigationComponentCampeonato}/></Grid></Hidden>
			</BrowserRouter>
		)
	}
}

export default App
