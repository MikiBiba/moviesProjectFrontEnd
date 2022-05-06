import React, { useState, useEffect } from "react";
import { getAllData, getOneItem, deleteItem } from "../../utils";
import { Link } from "react-router-dom";
import "./MembersStyle.css"
const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [clicked, setClicked] = useState(false);
  const [movies, setMovies] = useState([]);
  const [unWatchedMovies, setUnWatchedMovies] = useState([]);

  const membersUrl = "http://localhost:8000/memberswithsubs";
  const moviesUrl = "http://localhost:8000/moviesWithSubs";


  const handleDelete = async (url, id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this member from database?"
      )
    ) {
      const { data } = await deleteItem(url, id);
      alert(data)
    }
  };
  const handleButton = () => {
    setClicked(!clicked)
  }

  // const handleFilter = (e) => {
  //   const {value} = e.target
  //   members.map(member => {
  //     if(value === "") {
  //       return member;
  //     } else if(member.name.startsWith(value)) {
  //       setFilrteredMembers([...filteredMembers.filter(member => member.name.startsWith(value))])
  //     // filteredMembers = members.filter(x => x.name.startsWith(value)) 
  //   }
  // })
  // }
  useEffect(() => {
    const fetchData = async (url1, ur2) => {
      const { data: members } = await getAllData(url1);
      const { data: movies } = await getAllData(ur2);
      setMembers(members);
      setMovies(movies);
    };
    fetchData(membersUrl, moviesUrl);
  }, []);

  const memberRep = () => {
    return members.filter((value) => {
      if (searchTerm === "") {
        return value;
      } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
    }).map((member) => {
      return (
        <div className="Members"
          style={{ border: "2px solid black", width: "500px" }}
          key={member._id}
        >
          <h3>{member.name}</h3> <br />
          <br />
          <strong>Email: </strong> {member.email}
          <br />
          <strong>City: </strong>
          {member.city} <br />
          <div style={{ border: "2px solid blue", width: "200px" }}>
            <strong>movies the member watched</strong>
            <button onClick={handleButton} >Subscribe to a new movie</button>


            {clicked ? <div>
              <select name="movies" >
                {
                  movies.filter(movie => !member.subscriptions
                    .map(sub => sub.movies.name)
                    .includes(movie.name))
                    .map((mov, index) => <option key={index}> {mov.name} </option>
                    )
                }
              </select> <br />
              Enter subscription date<input type="text" /> <br />
              <button>Add</button>
            </div> : null}
            <ul>
              {member.subscriptions.map((sub, index) => {
                return <li key={index} >{sub.movies.name}</li>
              })}
            </ul>
          </div > <br />
          <span className="buttons" >
            <Link to={`updatemember/${member._id}`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() =>
                handleDelete("http://localhost:8000/members", member._id)
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
    <div className="App" >
      <Link to={"addnewmember"}>
        <button>Add member</button>
      </Link>
      <br />
      <input type="text" placeholder="Search by name"
        name="search" onChange={event => { setSearchTerm(event.target.value) }
        } />

      <h2>Members</h2>

      {memberRep()}
      <br />
    </div>
  );
};

export default MembersPage;

