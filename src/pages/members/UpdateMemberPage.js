import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { getOneItem, updateItem } from "../../utils";


const EditMemberPage = () => {

  const { id } = useParams();

  const [member, setMember] = useState({
    name: "",
    email: "",
    city: "",
  });

  const membersUrl = "http://localhost:8000/members";

  const handleUpdate = async () => {
    const result = await updateItem(membersUrl, member._id, member);
    alert(result)
  };

  useEffect(() => {
    const fetchData = async (url) => {
      const { data } = await getOneItem(url, id);
      setMember(data);
    };
    fetchData(membersUrl);
  }, []);



  return (
    <div>


      <h2>{`Edit ${member.name}'s data`}</h2>
      Name:{" "}
      <input
        type="text"
        value={member.name}
        onChange={(e) => setMember({ ...member, name: e.target.value })}
      />
      <br />
      Email:{" "}
      <input
        type="text"
        value={member.email}
        onChange={(e) =>
          setMember({ ...member, email: e.target.value })
        }
      />
      <br />
      City:{" "}
      <input
        type="text"
        value={member.city}
        onChange={(e) => setMember({ ...member, city: e.target.value })}
      />
      <br />
      <br />
      <button onClick={handleUpdate}>Update</button>

      <Link to={"/members"}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};


export default EditMemberPage;
