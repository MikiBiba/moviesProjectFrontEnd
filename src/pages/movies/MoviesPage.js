import React, { useState, useEffect } from "react";
import { getAllData, getOneItem, deleteItem } from "../../utils";
import { Link, useParams } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "../styles/NavBar.styled";
import { Container, searchInput, MemberBtn, SubInput, Movies } from "../styles/MoviesStyle.styled"
const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const moviesUrl = "http://localhost:8000/movieswithsubs";
  const params = useParams();
  let movieParamName;

  const handleDelete = async (url, id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this movie from database?"
      )
    ) {
      const { data } = await deleteItem(url, id);
      console.log(data);
    }
  };

  useEffect(() => {
    if (Object.keys(params).length === 0) {
      const fetchData = async (url) => {
        const { data: movies } = await getAllData(url);
        setMovies(movies);
      };
      fetchData(moviesUrl);
    } else {
      const fetchData = async (url) => {
        const { data: movies } = await getAllData(url);
        setMovies(movies);
      };
      fetchData(moviesUrl);
      setSearchTerm(params.name);
    }
  }, []);

  const moviesRep = () => {
    return movies.filter((value) => {
      if (searchTerm === "") {
        return value;
      } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    }).map((movie) => {
      return (
        <Movies
          style={{ border: "2px solid black" }}
          key={movie._id}
        >
          <strong>{`${movie.name}, ${movie.yearPremiered.slice(0, 4)}`}</strong>  <br />
          <ul>
            {movie.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>{" "}
          <br />
          <img src={movie.imageUrl} alt="Movie image" width={"100px"} /> <br /><br />
          <div >
            <strong> subscribed members  </strong>
            <ul>
              {movie.subscriptions.map((sub, index) => {
                // console.log(sub)
                return <li key={index}>  <Link to={`/members/${sub.member.name}`}> {sub.member.name} </Link></li>;
              })}
            </ul>
          </div> <br /><br />
          <span className="buttons"  >
            <Link to={`/movies/updatemovie/${movie._id}`}>
              <button>Edit</button>
            </Link>

            <button
              onClick={() =>
                handleDelete("http://localhost:8000/movies", movie._id)
              }
            >
              Delete
            </button>
          </span>

        </Movies >
      );
    });
  };

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/movies" activeStyle>
            Movies
          </NavLink>
          <NavLink to="/members" activeStyle>
            Members
          </NavLink>
          <NavLink to="/" activeStyle>
            Login
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/" >Sign in</NavBtnLink>
        </NavBtn>
      </Nav>

      <Container>


        <h2>{movieParamName}</h2>

        <Link to={"addNewMovie"}>
          <button>Add Movie</button>
        </Link> <br /> <br />
        <input type="text" onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by name" name="search" />
        <br />
        <h2>Movies</h2>
        {moviesRep()}
        <br />
      </Container>

    </div>
  );
};

export default MoviePage;
