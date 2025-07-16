import {useFetch} from '../hooks/useFetch';
import {Card} from "../components";
export const MovieList = () => {

  const {data:movies} = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=15c75efde3e2204f25ed29917cfa6b91")

  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
          <div className = "flex justify-start flex-wrap"> 
          { movies.map((movie) => (
            <Card key={movie.id} movie = {movie}/>
          ))
          }
          </div>
        </section>
    </main>
  )
}
