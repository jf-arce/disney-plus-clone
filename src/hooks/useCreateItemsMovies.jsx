import { CardsMovies } from "../components/Cards/CardsMovies";

export const useCreateItemsMovies = (movies) => {
    return movies.map((movie) => (
      <CardsMovies key={movie.id} img={movie.backdrop_path} title={movie.title} movieId={movie.id}/>
    ));
};
