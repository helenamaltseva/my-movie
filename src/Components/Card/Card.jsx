//assets
import "../../assets/styles/components/card.scss"

const Card = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  const releaseDate = movie.info.release_date;
  const year = releaseDate ? new Date(releaseDate).getFullYear() : "N/A";

  return (
    <div className="card">
      <img className="card-poster" src={img_path + movie.info.poster_path} alt="" />
      <div className="card-block">
        <div className="card-block__front">
          <div className="card-block__front-info">
            <h3 className="card-block__front-info__title">{movie.info.title}</h3>
            <h4 className="card-block__front-info__year">{year}</h4>
          </div>  
          <p className="card-block__front__rating">{movie.info.vote_average}</p>
          
        </div>
        <div className="card-block__back">
          <h2 className="card-block__back__summary">Overview</h2>
          {`${movie.info.vote_average} • ${movie.info.vote_count.toLocaleString()} votes • ${year}`}
          <p>{movie.info.overview}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Card;