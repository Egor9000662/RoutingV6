import { useState } from "react";
import {PageHome,PageContacts,PageAbout,PageError,PagePost} from '../index'
import style from "./style.module.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={style.container}>
        <header>
          <NavLink style={({isActive}) => ({color:isActive ? 'green' : 'blue'})}  to="/">Home</NavLink>
          <NavLink style={({isActive}) => ({color:isActive ? 'green' : 'blue'})}  to="/about">About</NavLink>
          <NavLink style={({isActive}) => ({color:isActive ? 'green' : 'blue'})}   to="/contacts">Contacts</NavLink>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/about/:number" element={<PagePost/>}/>
            <Route path="/contacts" element={<PageContacts />} />
            <Route path="*" element={<PageError/>} />
          </Routes>
        </main>

        <footer>
          <p>p.s Look SPa ROuting</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
