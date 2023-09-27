import Nav from "./component/Nav";
import Login from "./component/Login";
import Home from "./component/Home";
import Cart from "./component/cart";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Product from "./component/admin/product";
import Category from "./component/admin/category";
import Signin from "./component/Sigin";

const App=()=>{
return(
  <>
  <Nav/>
  <BrowserRouter>
  <Routes>
<Route path="/home" element={<Home/>} />
<Route path="/cart" element={<Cart/>} />

<Route path="/admin/product" element={<Product/>} />
<Route path="/admin/category" element={<Category/>} />
<Route path="/" element={<Login/>} />
<Route path="/sigin" element={<Signin/>} />



  </Routes>
  
  
  
  </BrowserRouter>

  
  </>
)


}

export default App;