import { Routes, Route} from "react-router-dom";
import Bracelets from "./components/Bracelets"
import Chunkybangle from "./components/Chunkybangle"
import Earings from "./components/Earings"
import Emptycart from "./components/Emptycart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Product from "./components/Product"
import Rings from "./components/Rings"
import Signin from "./components/Signin"
import Signup from "./components/Signup";
import Alljewelery from "./components/common/Details";
import Neckless from "./components/Neckless";
import Jumka from "./components/Jumka";
import Shopall from "./components/Shopall";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Emptycart/>}/>
        <Route path="/earrings" element={<Earings/>}/>
        <Route path="/bracelets" element={<Bracelets/>}/>
        <Route path="/rings" element={<Rings/>}/>
        <Route path="/jumka" element={<Jumka/>}/>
        <Route path="/chunky-bangles" element={<Chunkybangle/>}/>
        <Route path="/all-jewelery" element={<Alljewelery/>}/>
        <Route path="/necklaces" element={<Neckless/>}/>
        <Route path="/shop-all" element={<Shopall/>}/>
      </Routes> */}
      <Admin/>
    </>
  )
}

export default App
