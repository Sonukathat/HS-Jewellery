import { Routes, Route } from "react-router-dom";
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
import Addcategory from "./components/admin/Addcategory";
import Getcategory from "./components/admin/Getcategory";
import Updatecategory from "./components/admin/Updatecategory";
import DeleteCategory from "./components/admin/Deletecategory";
import AdminRoute from "./components/admin/AdminRoute";
import Notfound from "./components/Notfound";
import Userprofile from "./components/Userprofile";
import AllUser from "./components/admin/AllUser";
import Createorder from "./components/Createorder";
import GetToKnow from "./components/Gettoknow";

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
        } />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Emptycart />} />
        <Route path="/earrings" element={<Earings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/rings" element={<Rings />} />
        <Route path="/jumka" element={<Jumka />} />
        <Route path="/chunky-bangles" element={<Chunkybangle />} />
        <Route path="/all-jewelery" element={<Alljewelery />} />
        <Route path="/necklaces" element={<Neckless />} />
        <Route path="/shop-all" element={<Shopall />} />
        <Route path="/page-not-found" element={<Notfound />} />
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/order" element={<Createorder />} />
        <Route path="/get-to-know" element={<GetToKnow />} />
        <Route path="/admin" element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        } />
        <Route path="/addcategory" element={
          <AdminRoute>
            <Addcategory />
          </AdminRoute>
        } />
        <Route path="/getcategory" element={
          <AdminRoute>
            <Getcategory />
          </AdminRoute>
        } />
        <Route path="/updatecategory" element={
          <AdminRoute>
            <Updatecategory />
          </AdminRoute>
        } />
        <Route path="/deletecategory" element={
          <AdminRoute>
            <DeleteCategory />
          </AdminRoute>
        } />
        <Route path="/all-users" element={
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        } />
      </Routes>
    </>
  )
}

export default App
