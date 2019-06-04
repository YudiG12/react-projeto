import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

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
    },

    allTeams: (idChampionship) => {
        return fetch(baseURL + "player/times/" + idChampionship, baseGET)
            .then(res => {
                return res.json()
            })
    },
    newTeam: (idChampionship,nmTeam,users) => {
        basePOST.body = {
            "nmTime":nmTeam,
            "idChampionship":idChampionship,
            "idsPlayers":users
        }
        return fetch(baseURL + "player/time" , basePOST)

            .then(res => {
                return res.json()
            })
    }
}

export default championships
