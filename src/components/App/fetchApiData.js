const fetchApiData = () => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText)
        } else {
            return response.json()
        }
    })
}



export default fetchApiData;
