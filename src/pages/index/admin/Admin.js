import React from 'react'
import {Link} from 'react-router-dom'

function Login(props) {
    return(
        <div style={{paddingLeft:'270px'}}>
            <p>Eu sou a página de administrador</p>
            <Link to='/login'>
                Sair
            </Link>
        </div>
    )
}

export default Login