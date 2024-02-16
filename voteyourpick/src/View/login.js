import React, { useState } from "react";
import logo from "../Assets/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();

  const handleLogin = () => {
    // Perform authentication (e.g., check credentials)
    // For simplicity, this example just checks if the username is 'admin' and password is 'password'
    if (username === "admin" && password === "password") {
      // Set isAuthenticated to true in localStorage
      localStorage.setItem("isAuthenticated", "true");
      // Redirect to the home page
      // history.push('/');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container mx-auto h-screen ">
      <div className="grid md:grid-cols-2 gap-4 md:h-full md:content-center px-4 mt-[100px]">
        <section className="h-full flex flex-col md:flex-row justify-center">
          <img alt="logo" src={logo} className="w-[240px]"  />
        </section>
        <section>
          <form>
          <div class="md:w-[400px]">
              <h2 className="text-3xl">Login</h2>
              <input
                className="block w-full mt-5 px-2 py-1 border rounded"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              /> 
              <input
                className="block w-full mt-5 px-2 py-1 border rounded"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className="mt-5 w-full px-4 py-2 bg-blue-950 text-white rounded md:w-auto" onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
