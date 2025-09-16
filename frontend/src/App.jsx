import { Routes, Route} from "react-router-dom";
import Bracelets from "./components/Bracelets"
import Chunkybangle from "./components/Chunkybangle"
import Earings from "./components/Earings"
import Emptycart from "./components/Emptycart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Naturalstone from "./components/Naturalstone"
import Product from "./components/Product"
import Rings from "./components/Rings"
import Signin from "./components/Signin"
import Signup from "./components/Signup";
import Alljewelery from "./components/common/Alljewelery";
import Neckless from "./components/Neckless";

function App() {
  return (
    <>
      <Routes>
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
        <Route path="/natural-stone-jewelry" element={<Naturalstone/>}/>
        <Route path="/chunky-bangles" element={<Chunkybangle/>}/>
        <Route path="/all-jewelery" element={<Alljewelery/>}/>
        <Route path="/necklaces" element={<Neckless/>}/>
      </Routes>
    </>
  )
}

export default App
