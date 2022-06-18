import { MovieCard } from "./MovieCard";

interface IMovie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IContentProps {
  categoryTitle: string;
  movies: IMovie[]
}

export function Content({ categoryTitle, movies }:IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {categoryTitle}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              key={movie.imdbID} 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}