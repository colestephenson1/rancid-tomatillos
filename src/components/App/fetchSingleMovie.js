
const fetchSingleMovie = (id) => {

  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => {
    if (!response.ok) {
        throw new Error(response.status + " " + response.statusText)
    } else {
        return response.json()
    }
  })

}

export default fetchSingleMovie;
