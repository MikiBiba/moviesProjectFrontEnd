import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getOneItem, updateItem } from "../../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "../styles/NavBar.styled";


const UpdateMovie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({
    name: "",
    genres: [],
    imageUrl: "",
    yearPremiered: "",
  });

  const moviesUrl = "http://localhost:8000/movies";

  const handleUpdate = async () => {
    const { data } = await updateItem(moviesUrl, movie._id, movie);
    console.log(moviesUrl);
    console.log(movie._id);
    console.log(movie);
  };

  useEffect(() => {
    const fetchData = async (url) => {
      const { data } = await getOneItem(url, id);
      setMovie(data);
    };
    fetchData(moviesUrl);
  }, []);



  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/movies" >
            Movies
          </NavLink>
          <NavLink to="/members" >
            Members
          </NavLink>
          <NavLink to="/" >
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/" >Sign in</NavBtnLink>
        </NavBtn>
      </Nav>

      <h2>{`Edit ${movie.name}'s data`}</h2>
      Name:{" "}
      <input
        type="text"
        value={movie.name}
        onChange={(e) => setMovie({ ...movie, name: e.target.value })}
      />
      <br />
      Genres:{" "}
      <input
        type="text"
        value={movie.genres.join(",")}
        onChange={(e) =>
          setMovie({ ...movie, genres: e.target.value.split(",") })
        }
      />
      <br />
      Image URL:{" "}
      <input
        type="text"
        value={movie.imageUrl}
        onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })}
      />
      <br />
      Premiered:{" "}
      <input
        type="text"
        value={movie.yearPremiered}
        onChange={(e) => setMovie({ ...movie, yearPremiered: e.target.value })}
      />
      <br />
      <button onClick={handleUpdate}>Update</button>

      <Link to={"/movies"}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default UpdateMovie;
