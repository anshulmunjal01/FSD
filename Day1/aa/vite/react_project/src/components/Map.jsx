import movies from "./Movies.js";
import './index.css';
function Map(){
    return(
        <div className="f">
            {
                movies.map(movie => (
                    <div className="d">
                        <img src = {movie.image}></img>
                        <h3>ID: {movie.id}</h3>
                        <h3>{movie.image}</h3>
                        <h3>Title: {movie.title}</h3>
                        <h3>Language: {movie.language}</h3>
                        <h3>Cost: {movie.cost}</h3>
                    </div>
                ))
            }
        </div>
    );
}
export default Map;