import { Routes, Route } from 'react-router-dom';
import { MovieList, MovieDetail, Search, PageNotFound } from '../pages';


export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={< MovieList />} />
            <Route path="/movies/:id" element={< MovieDetail />} />
            <Route path="/movies/popular" element={< MovieList />} />
            <Route path="/movies/top" element={< MovieList />} />
            <Route path="/movies/upcoming" element={< MovieList />} />
            <Route path="/movies/search" element={< Search />} />
            <Route path="*" element={< PageNotFound />} />
        </Routes>
    </>
    
  )
}
