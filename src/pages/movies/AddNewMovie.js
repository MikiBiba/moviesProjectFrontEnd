import { useState } from "react";
import { Link } from "react-router-dom";
import { addNewItem } from "../../utils";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "../styles/NavBar.styled";


const AddNewMovie = () => {
  const [movie, setMovie] = useState({
    name: "",
    genres: [],
    imageUrl: "",
    yearPremiered: "",
  });

  const url = "http://localhost:8000/movies";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (movie) {
      const { result } = await addNewItem(url, movie);
      alert("Movie added succefully", result);
    }
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

      <h1>Add new movie</h1>
      <form onSubmit={handleSubmit}>
        Name:{" "}
        <input
          type="text"
          onChange={(e) => setMovie({ ...movie, name: e.target.value })}
        />{" "}
        <br />
        Genres:{" "}
        <input
          type="text"
          onChange={(e) =>
            setMovie({ ...movie, genres: e.target.value.split(",") })
          }
        />{" "}
        <br />
        Image URL:{" "}
        <input
          type="text"
          onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })}
        />{" "}
        <br />
        Premiered:{" "}
        <input
          type="text"
          onChange={(e) =>
            setMovie({ ...movie, yearPremiered: e.target.value })
          }
        />{" "}
        <br /> <br />
        <button type="submit">Send</button>{" "}
        <Link to="/movies">
          <button type="button">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddNewMovie;
