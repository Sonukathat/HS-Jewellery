import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { useState } from "react";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/users/signup', {
                name,
                email,
                password
            });
            alert("Signup successful");
            setName("");
            setEmail("");
            setPassword("");
            console.log("hello");
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <form
                    onSubmit={handleUser}
                    className="rounded-lg bg-white p-10 flex flex-col gap-8 w-72 sm:w-[25rem]"
                >
                    <div className="flex justify-center">
                        <h2 className="text-xl">MACHKI</h2>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Sign up</h2>
                        <p className="text-sm text-gray-600">
                            Enter your email and we'll send you a verification code
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <input
                            className="border border-gray-300 px-4 py-2 rounded-md"
                            required
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        <Link className="underline" to="/signin">
                            Signin
                        </Link>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Signup;
