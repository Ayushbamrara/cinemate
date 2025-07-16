import { useState, useEffect }from 'react'

export const useFetch = ( apiPath ) => {
    const [data, setData] = useState([]);
    const  url = `https://api.themoviedb.org/3/${apiPath}?api_key=15c75efde3e2204f25ed29917cfa6b91`;

    useEffect(() => {
    async function fetchMovies(){
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url])

  return {data}
}
