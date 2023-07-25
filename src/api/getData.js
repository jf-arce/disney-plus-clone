const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNhY2FhMzYzNDdmYjU1NWMxYzg0YzcwYjRhMWU0YyIsInN1YiI6IjY0YWY5MTlhYTQxMGM4MDBjOGIwMWRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmBpfbPaOHWkqph74fGIJupIgXkx6up11Khg9M5oRBY'
    }
};

const API_KEY = 'c53acaa36347fb555c1c84c70b4a1e4c';

export async function getMovies(company){
    try{
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=${company}`
        const response = await fetch(apiUrl,options)
        const data = await response.json();
        return data
    }catch(error){
        console.log('Error al obtener las películas');
    }   
}

export async function getPixarMovies(){
    return await getMovies("3")
}
export async function getMarvelMovies(){
    return await getMovies("420")
}
export async function getNationalGeographicMovies(){
  return await getMovies("7521")
}

export async function getDisneyMovies() {
  try {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=2,3&with_genres=16`;
    const response = await fetch(url);
    const data = await response.json();
    return data

  } catch (error) {
    console.error('Error al obtener las películas de Disney:', error.message);
  }
}

export async function getStarWarsMovies() {
  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=star-wars&language=es`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data

  } catch (error) {
    console.error('Error al obtener las películas de star-wars:', error.message);
  }
}



