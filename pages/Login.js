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
            <label htmlFor="email">Email address</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
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
