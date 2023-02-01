import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Userhome from './pages/Home'

function Routess() {
  return (
    <Routes>
         <Route exact path ="/" element = {<Userhome/>} />
    </Routes>
  )
}

export default Routess