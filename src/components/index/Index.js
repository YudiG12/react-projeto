import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Index extends Component {
    render() {
        return (

            <div>
                INDEX PAGE
                <Redirect to='/login' />
            </div>
        )
    }
}

export default Index