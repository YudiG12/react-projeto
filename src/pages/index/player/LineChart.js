import React, {Component} from 'react'
import { LineChart, Line, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

class LineChartComponent extends Component{
    render() {
    const data = [{name: 'Tempo', uv: 400, pv: 2400, amt: 2400},{name: 'Tempo', uv: 600, pv: 1756, amt: 600}];
    return (
    <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#0004d8" />
        <Line type="monotone" dataKey="amt" stroke="#0004d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
    </LineChart>
    )
    }
}

export default LineChartComponent