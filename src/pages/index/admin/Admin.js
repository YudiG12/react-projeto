import React from 'react'
import {NavLink} from 'react-router-dom'

function Login(props) {
    return(
        <div>
            <p>Eu sou a página de administrador</p>
            <NavLink to='/login'>
                Sair
            </NavLink>
        </div>
        )
}

export default Login