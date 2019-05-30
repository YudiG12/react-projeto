import baseURL from '../baseurl'
import baseGET from '../baseGET'
import basePOST from '../basePOST'

const data = {
    isLogOn: (logado, deslogado) => {
        return fetch(baseURL + 'data/validate', baseGET)
            .then(res => res.json())
            .then(isLogado => {
                if(isLogado == true) 
                {
                    return logado();
                } 
                else 
                {
                    return deslogado();
                }
            })
    },
    getRole: () => {
        return fetch(baseURL + 'data/role', baseGET)
            .then(res => res.json())
    },
    isJogador: (isPlayer, isNotAPlayer) => {
        return fetch(baseURL + 'data/idrole-jogador', baseGET)
            .then(res => res.json())
            .then(idPlayerRole => {
                if(idPlayerRole == 0) {
                    isNotAPlayer();
                } else {
                    isPlayer(idPlayerRole);
                }
            })
    }
}

export default data