// import styles from "./movie-card.module.css";
// import classnames from "classnames";
import { useParams, Link } from "react-router-dom";

const MovieCard = ({ title, releaseDate, imageUrl, id }) => {
  return (
    <Link to={`${id}`}>
      <div className="card">
        <div className="card-content">
          <span>
            <img className="card-image mb-3" src={imageUrl} alt="image" />
          </span>
          <span className="subtitle">{title}</span>
          <br />
          <span>{releaseDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
