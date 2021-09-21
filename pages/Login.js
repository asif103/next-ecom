import Head from "next/head";
import Link from "next/link";
const Login = () => {
  return (
    <div>
      <Head>
        <title>Login page</title>
      </Head>
      <div className="container">
        <form className="my-4 mx-auto" style={{ maxWidth: "500px" }}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
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
