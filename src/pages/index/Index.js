import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import data from '../../scripts/http/data'

class Index extends Component {

    constructor(props) {
        super(props);
        console.log("ljdsalkdasldkjsa");
        data.isLogOn()
            .then(resultado => {
                if(resultado == true) {
                    return data.getRole()
                } else {
                    window.location.href = "/login"
                }
            })
            .then(resultado => {
                console.log(resultado);
                if(resultado == 'jogador') {
                    window.location.href = "/player"
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <p></p>
        )
    }
}

export default Index