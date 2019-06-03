import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

const Machine = {
    getLastMetric: () => {
        return fetch(baseURL + 'machine/metric/last', baseGET)
            .then(res => res.json())
    }
}

export default Machine