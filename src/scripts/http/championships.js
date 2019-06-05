import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

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
    },
    newTeam: (idChampionship,nmTeam,users) => {
        basePOST.body = {
            "nmTime":nmTeam,
            "idChampionship":idChampionship,
            "idsPlayers":users
        }
        return fetch(baseURL + "player/time" , basePOST)
    },
    newMatch: (idChampionship,date,time) => {
        basePOST.body = {
            "date": date,
            "time": time,
            "idChampionship": idChampionship
        }
        return fetch(baseURL + "match" , basePOST)
    },
    insertChampionship: (nmChampionship, idGame) => {
        const body = basePOST;
        body.body = {
            "nameChampionship": nmChampionship,
            "idGame": idGame
        }
        return fetch(baseURL + "campeonato/signup", basePOST)
            .then(res => {
                return res.json()
            })
    }
}

export default championships
