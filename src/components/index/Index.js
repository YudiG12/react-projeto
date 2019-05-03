import React, {Component} from 'react'

class Index extends Component {
    constuctor() {
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = '/login';
        this.props.history.push(path);
    }

    render() {
        return (
            <button onClick={this.routeChange}>LOGIN</button>
        )
    }
}

export default Index