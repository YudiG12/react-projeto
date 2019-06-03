import baseURLStream from '../baseurlstream'
import baseGET from '../baseGET'

const streams = {
    getStreamsChampionship: (idChampionship) => {
        return fetch(baseURLStream + "streams/championship/" + idChampionship, baseGET)
            .then(res => res.json())
    }
}

export default streams;