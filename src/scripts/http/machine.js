import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

const Machine = {
    getLastMetric: () => {
        return fetch(baseURL + 'machine/metric/last', baseGET)
            .then(res => res.json())
    },
    getMetricsByIdsUserRole: (ids) => {
        let base = basePOST;
        base.body = ids;
        base.body = `[${base.body.toString()}]`;
        return fetch(baseURL + 'machine/metric/last/user-roles', base)
            .then(res => res.json())
    },
    getLastMachineMetricById: (idMachine) => {
        return fetch(baseURL + 'machine/metric/last/' + idMachine, baseGET)
            .then(res => res.json())
    }
}

export default Machine