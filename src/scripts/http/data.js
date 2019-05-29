import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

const data = {
    isLogOn: () => {
        return fetch(baseURL + '/data/validate', baseGET)
            .then(res => res.json())
    },
    getRole: () => {
        return fetch(baseURL + '/data/role', baseGET)
            .then(res => res.json())
    }
}

export default data