const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTNhY2FhMzYzNDdmYjU1NWMxYzg0YzcwYjRhMWU0YyIsInN1YiI6IjY0YWY5MTlhYTQxMGM4MDBjOGIwMWRhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmBpfbPaOHWkqph74fGIJupIgXkx6up11Khg9M5oRBY'
    }
};

export async function getData(){
    const apiUrl = 'https://api.themoviedb.org/3/authentication'
    const response = await fetch(apiUrl,options)
    const data = await response.json();

    return data
}

const API_KEY = 'c53acaa36347fb555c1c84c70b4a1e4c'

//MARVEL
// export async function getDataList(){
//     const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=420'
//     const response = await fetch(apiUrl,options)
//     const data = await response.json();

//     return data
// }



//PIXAR
export async function getDataList(){
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=3'
    const response = await fetch(apiUrl,options)
    const data = await response.json();

    return data
}