import Head from "next/head";
import Link from "next/link";
import { useState, useContext } from "react";
import { postData } from "../Utils/fetchData";
import { DataContext } from "../store/GlobalState";
import Cookies from "js-cookie";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const { state, dispatch } = useContext(DataContext);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("auth/login", userData);
    console.log(res);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });
    dispatch({ type: "NOTIFY", payload: { success: res.msg } });
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookies.set("refreshToken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };
  return (
    <div>
      <Head>
        <title>Login page</title>
      </Head>
      <div className="container">
        <form
          className="my-4 mx-auto"
          style={{ maxWidth: "500px" }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={handleChangeInput}
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
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <Link href="/SignUp">
              <a style={{ color: "crimson" }}>Sign Up</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
