import { useState } from "react";
import { Link } from "react-router-dom";
import { addNewItem } from "../../utils";


const AddNewMovie = () => {
  const [member, setMember] = useState({
    name: "",
    email: "",
    city: "",
  });

  const url = "http://localhost:8000/members";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (member) {
      const { result } = await addNewItem(url, member);
      alert("Member added succefully", result);
    }
  };

  return (
    <div className="App">



      <h1>Add new member</h1>
      <form onSubmit={handleSubmit}>
        <strong>Name:</strong>{" "}
        <input
          type="text"
          onChange={(e) => setMember({ ...member, name: e.target.value })}
        />{" "}
        <br />
        <strong>Email:</strong>{" "}
        <input
          type="text"
          onChange={(e) => setMember({ ...member, email: e.target.value })}
        />{" "}
        <br />
        <strong>City:</strong>{" "}
        <input
          type="text"
          onChange={(e) => setMember({ ...member, city: e.target.value })}
        />{" "}
        <br /> <br />
        <button type="submit">Send</button>{" "}
        <Link to="/members">
          <button type="button">Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default AddNewMovie;
