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
        <Route path="/cart" element={<Emptycart/>}/>
      </Routes>
    </>
  )
}

export default App
