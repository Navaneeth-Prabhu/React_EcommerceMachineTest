import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import Userhome from './pages/Home'
import WishProduct from "./pages/WishProduct";


function Routess() {
  return (
    <Routes>
         <Route exact path ="/" element = {<Userhome/>} />
         <Route exact path ="/wishlist" element = {<WishProduct/>} />
    </Routes>
  )
}

export default Routess