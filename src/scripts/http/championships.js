import baseURL from '../baseurl'
import baseGET from '../baseGET'

const championships = {
    allChampionships: () => {
        return fetch(baseURL + "campeonato/get", baseGET)
            .then(res => res.json())
    },
    allChampionshipsParticipe: () => {
        return fetch(baseURL + "player/championship", baseGET)
            .then(res => res.json())
    },
    allChampionshipsAdministro: () => {
        return fetch(baseURL + "player/championship/administrator", baseGET)
            .then(res => res.json())
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
    },
    allTeams: (idChampionship) => {
        return fetch(baseURL + "player/times/" + idChampionship, baseGET)
            .then(res => {
                return res.json()
            })
    }
}

export default championships
