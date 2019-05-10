import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <div>
                INDEX PAGE <br />
                <NavLink to ='/login'>Fazer Login </NavLink>
            </div>
        )
    }
}

export default Index