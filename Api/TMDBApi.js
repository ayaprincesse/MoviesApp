const API_TOKEN = "d5f6a20bfd85c70f2947622c2d7d10f9";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }

  export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }

  export const GET = async url => {
    const API_KEY = "d5f6a20bfd85c70f2947622c2d7d10f9";
    const BASE_URL = 'https://api.themoviedb.org/3';
  
    const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`;
  
    let response = await fetch(API_URL, {method: 'GET'});
    response = response.json();
    return response;
  };
  