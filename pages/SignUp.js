import Head from "next/head";
import Link from "next/link";
import { useState, useContext } from "react";
import { postData } from "../Utils/fetchData";
import { DataContext } from "../store/GlobalState";

import valid from "../Utils/valid";
const SignUp = () => {
  const initialState = { name: "", email: "", password: "", cpassword: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cpassword } = userData;
  const { state, dispatch } = useContext(DataContext);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(name, email, password, cpassword);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/register", userData);
    console.log(res);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
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
            Sign Up
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
