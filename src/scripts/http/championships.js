import baseURL from '../baseurl'
import baseGET from '../baseGET'

const championships = {
    allChampionships: () => {
        return fetch(baseURL + "campeonato/get", baseGET)
            .then(res => {
                console.log(res)
                return res.json()
            })
    }
}

export default championships