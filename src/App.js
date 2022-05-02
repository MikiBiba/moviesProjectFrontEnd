import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/movies/MoviesPage";
import AddNewMovie from "./pages/movies/AddNewMovie";
import UpdateMovie from "./pages/movies/UpdateMovie";
import SubscriptionsPage from "./pages/subscriptions/SubscriptionsPage";
import MembersPage from "./pages/members/MembersPage";
import UpdateMemberPage from "./pages/members/UpdateMemberPage";
import AddMembersPage from "./pages/members/AddMemberPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="subscriptions" element={<SubscriptionsPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="members/addnewmember" element={<AddMembersPage />} />
        <Route path="members/updateMember/:id" element={<UpdateMemberPage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/addNewMovie" element={<AddNewMovie />} />
        <Route path="movies/updateMovie/:id" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
};

export default App;
