//assets
import "../../assets/styles/components/card.scss"
// import poster from "../../assets/images/poster.jpg"

const Card = (movie) => {
  // console.log(movie.info);
  let img_path="https://image.tmdb.org/t/p/w500";


  return(
    <>
      <div className="card">
        <img className="card-poster" src={img_path+movie.info.poster_path} alt="" />
        <div className="card-block">
          <div className="card-block__front">
            <h3 className="card-block__front__title">{movie.info.title}</h3>
            <p className="card-block__front__rating">{movie.info.vote_average}</p>
          </div>
          <div className="card-block__back">
            <h2 className="card-block__back__summary">Overview</h2>
            {movie.info.overview} 
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;