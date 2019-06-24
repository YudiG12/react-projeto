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
    insertChampionship: (nmChampionship, idGame) => {
        const base = basePOST;
        base.body = `{
            "nameChampionship": "${nmChampionship}",
            "idGame": ${idGame}
        }`;
        return fetch(baseURL + "campeonato/signup", base)
            .then(res => {
                return res.json()
            })
    },
    insertInvite: (cpf, idChampionship) => {
        let base = basePOST;
        base.body = `{ "cpf": "${cpf}" }`;
        return fetch(`${baseURL}campeonato/invite/${idChampionship}/create`, base)
            .then(res => {
                return res.json();
            })
    },
    insertPartida: (body) => {
        let base = basePOST;
        base.body = body;
        console.log(body);
        return fetch(`${baseURL}player/match`, base)
            .then(res => {
                return res.json();
            })
    },
    getPlayersChampionship: (idChampionship) => {
        return fetch(baseURL + "campeonato/" + idChampionship + "/players", baseGET)
            .then(res => {
                return res.json()
            })
    },
    insertTeam: (body) => {
        let base = basePOST;
        base.body = body;
        return fetch(`${baseURL}player/time`, base)
            .then(res => {
                return res.json();
            });
    },
    insertSlack: (body) => {
        let base = basePOST;
        base.body = body;
        return fetch(baseURL + 'campeonato/slack', base)
            .then(res => res.json())
    }
}

export default championships
