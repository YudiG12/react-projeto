import baseURL from '../baseurl'
import baseGET from '../baseGET'

const championships = {
    allChampionships: () => {
        return fetch(baseURL + "campeonato/get", baseGET)
            .then(res => {
                return res.json()
            })
    },

    allMatchs: (idChampionship) => {
        return fetch(baseURL + "player/match/" + idChampionship, baseGET)
            .then(res => {
                
                return res.json()
            })
    },

    allInvites: (idChampionship) => {
        return fetch(baseURL + "campeonato/invites/" + idChampionship, baseGET)
            .then(res => {
                return res.json()
            })
    }
}

export default championships
