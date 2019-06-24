import baseURL from '../baseurl'
import baseGET from '../baseGET'

const player = {
    allInvites: () => {
        return fetch(baseURL + "player/all-invites", baseGET)
            .then(res => {
                console.log(res);
                return res.json();
            });
    },
    invitesNotAnswered: () => {
        return fetch(baseURL + "player/all-invites/not-answered", baseGET)
            .then(res => res.json());
    },
    invitesRefused: () => {
        return fetch(baseURL + "player/all-invites/refused", baseGET)
            .then(res => res.json());
    },
    invitesAccepted: () => {
        return fetch(baseURL + "player/all-invites/accepted", baseGET)
            .then(res => res.json());
    },
    acceptInvite: (idChampionship) => {
        return fetch(baseURL + "player/invites/"+idChampionship+"/accept", baseGET)
            .then(res => res.json());
    },
    refuseInvite: (idChampionship) => {
        return fetch(baseURL + "player/invites/"+idChampionship+"/refuse", baseGET)
            .then(res => res.json());
    },
    matchDetail: (idMatch) => {
        return fetch(baseURL + "player/match/detail/"+idMatch, baseGET)
            .then(res => res.json());
    }
}

export default player;