import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/users/login', {
        email,
        password,
      });
      console.log(res)
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(res.data.user))

      // if (data.user.isAdmin) {
      //   navigate("/admin");
      // } else {
      //   navigate("/");
      // }

      toast.success("Signin successful!");
      setEmail('');
      setPassword('');

    } catch (error) {
      toast.error("Signin failed. Please try again.");
      console.error("Signin error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center py-8 bg-gray-100">
        <form
          onSubmit={handleSignin}
          className="rounded-lg bg-white p-10 flex flex-col gap-6 w-72 sm:w-[25rem]"
        >
          <div className="flex justify-center">
            <h2 className="text-xl">MACHKI</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Sign in</h2>
            <p className="text-sm text-gray-600">
              Enter your email and password to sign in
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="border border-gray-300 px-4 py-2 rounded-md"
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border border-gray-300 px-4 py-2 rounded-md"
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-800 cursor-pointer py-3 text-white rounded-md"
            >
              Continue
            </button>
          </div>
          <div className="flex gap-4 text-sm text-blue-500">
            <a className="hover:underline" href="#">
              Privacy policy
            </a>
            <a className="hover:underline" href="#">
              Terms of service
            </a>
            <Link className="underline" to="/signup">
              Signup
            </Link>
          </div>
        </form>
      </div>
      <Footer />
      <ToastContainer position="top-right" />
    </>
  );
}

export default Signin;
