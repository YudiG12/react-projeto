import React, {Component} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class LineChartComponent extends Component{
    render() {
    let tempo = 0
    let valor = document.location.pathname.split('/')[2]
    const data = [{name: tempo, uso: valor }];
    return (
    <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uso" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
    )
    }
}

export default LineChartComponent