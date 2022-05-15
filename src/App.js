import { Routes, Route } from "react-router-dom";
import "./App.css"
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/movies/MoviesPage";
import AddNewMovie from "./pages/movies/AddNewMovie";
import UpdateMovie from "./pages/movies/UpdateMovie";
import MembersPage from "./pages/members/MembersPage";
import UpdateMemberPage from "./pages/members/UpdateMemberPage";
import AddMembersPage from "./pages/members/AddMemberPage";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./pages/styles/NavBar.styled";


const App = () => {
  return (
    <div>

      <Nav>
        <NavLink to="/">
          <h1>Miki Biba</h1>
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
      <Routes>
        // Hello from app.js
        <Route path="/" element={<LoginPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="members/addnewmember" element={<AddMembersPage />} />
        <Route path="members/updateMember/:id" element={<UpdateMemberPage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:name" element={<MoviePage />} />
        <Route path="members/:name" element={<MembersPage />} />
        <Route path="movies/addNewMovie" element={<AddNewMovie />} />
        <Route path="movies/updateMovie/:id" element={<UpdateMovie />} />
      </Routes>
    </div>
  );
};

export default App;
