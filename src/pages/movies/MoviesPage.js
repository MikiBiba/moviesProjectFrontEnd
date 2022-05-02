import React, { useState, useEffect } from "react";
import { getAllData, getOneItem, deleteItem } from "../../utils";
import { Link } from "react-router-dom";
const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [subs, setSubs] = useState([]);

  const moviesUrl = "http://localhost:8000/movieswithsubs";
  const membersUrl = "http://localhost:8000/members";

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
    const fetchData = async (url) => {
      const { data: movies } = await getAllData(url);
      setMovies(movies);
      // movies.map(async (movie) =>
      //   movie.subscriptions.map(async (sub) => {
      //     const { data: name } = await getOneItem(
      //       `${membersUrl}/${movie.subscriptions.memberId}`
      //     );
      //     return name;
      //   })
      // );
    };
    fetchData(moviesUrl);
  }, []);

  const moviesRep = () => {
    return movies.map((movie) => {
      return (
        <div
          style={{ border: "2px solid black", width: "500px" }}
          key={movie._id}
        >
          {movie.name} <br />
          <ul>
            {movie.genres.map((genre, index) => {
              return <li key={index}>{genre}</li>;
            })}
          </ul>{" "}
          <br />
          <img src={movie.imageUrl} alt="Movie image" width={"100px"} />
          <span style={{ border: "1px solid black", width: "500px" }}>
            <ul>
              {movie.subscriptions.map((sub, index) => {
                return (
                  <li key={index}>
                    {((url) => {
                      return "Member";
                    })()}
                  </li>
                );
              })}
            </ul>
            <Link to={`updatemovie/${movie._id}`}>
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
        </div>
      );
    });
  };

  return (
    <div>
      <Link to={"addNewMovie"}>Add new movie</Link>

      {moviesRep()}
      <br />
    </div>
  );
};

export default MoviePage;
