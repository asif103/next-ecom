import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import valid from "./Utils/valid";
const SignUp = () => {
  const initialState = { name: "", email: "", password: "", cpassword: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cpassword } = userData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cpassword);
    console.log(errMsg);
  };
  return (
    <div>
      <Head>
        <title>Signup page</title>
      </Head>
      <div className="container">
        <form
          className="my-4 mx-auto"
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter email"
              onChange={handleChangeInput}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={handleChangeInput}
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChangeInput}
              value={password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword">Confirm Password</label>
            <input
              name="cpassword"
              type="password"
              className="form-control"
              id="cpassword"
              placeholder="Retype Password"
              onChange={handleChangeInput}
              value={cpassword}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link href="/Login">
              <a style={{ color: "crimson" }}>Login</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
