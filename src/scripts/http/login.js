import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

const login = {
    login: (body) => {
        basePOST.body = body
        return fetch(baseURL + 'login', basePOST)
            .then(res => res.json())
    },

    logout: () => {
        return fetch(baseURL + "login/logout", baseGET)
            .then(res => res.json())
    }
}

export default login