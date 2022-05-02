import React, { useState, useEffect } from "react";
import { getAllData, getOneItem, deleteItem } from "../../utils";
import { Link } from "react-router-dom";
const MembersPage = () => {
  const [members, setMembers] = useState([]);
  const [subs, setSubs] = useState([]);

  const membersUrl = "http://localhost:8000/memberswithsubs";

  const handleDelete = async (url, id) => {
    if (
      window.confirm(
        "Are you sure you want to delete this member from database?"
      )
    ) {
      const { data } = await deleteItem(url, id);
      console.log(data);
    }
  };

  useEffect(() => {
    const fetchData = async (url) => {
      const { data: members } = await getAllData(url);
      setMembers(members);
      // movies.map(async (movie) =>
      //   movie.subscriptions.map(async (sub) => {
      //     const { data: name } = await getOneItem(
      //       `${membersUrl}/${movie.subscriptions.memberId}`
      //     );
      //     return name;
      //   })
      // );
    };
    fetchData(membersUrl);
  }, []);

  const memberRep = () => {
    return members.map((member) => {
      return (
        <div
          style={{ border: "2px solid black", width: "500px" }}
          key={member._id}
        >
          <h3>{member.name}</h3> <br />
          <br />
          <strong>Email: </strong> {member.email}
          <br />
          <strong>City: </strong>
          {member.city} <br />
          <span style={{ border: "1px solid black", width: "500px" }}>
            <ul>
              {member.subscriptions.map((sub, index) => {
                return (
                  <li key={index}>
                    {((url) => {
                      return "Movie";
                    })()}
                  </li>
                );
              })}
            </ul>
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
    <div>
      <Link to={"addnewmember"}>Add new member</Link>

      {memberRep()}
      <br />
    </div>
  );
};

export default MembersPage;
