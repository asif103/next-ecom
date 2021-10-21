import Cookies from "js-cookie";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "./../store/GlobalState";

function NavBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const isActive = (r) => {
    if (router === r) {
      return "active";
    } else {
      return "";
    }
  };
  const handleLogout = () => {
    Cookies.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
    return router.push("/");
  };
  const adminRouter = () => {
    return (
      <>
        <li className="nav-item">
          <Link href="/users">
            <a className="dropdown-item">Users</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/create">
            <a className="dropdown-item">Products</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/categories">
            <a className="dropdown-item">Categories</a>
          </Link>
        </li>
      </>
    );
  };
  const loggedRouter = () => {
    return (
      <>
        <li className="nav-item d-flex align-items-center">
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />{" "}
          {auth.user.name}
        </li>

        <li className="nav-item d-flex align-items-center">
          {" "}
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
        </li>
        {auth.user.role === "admin" && adminRouter()}
        <li className="nav-item d-flex align-items-center">
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">E-Shop</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/">
                <a className={"nav-link" + isActive("/")}>Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Products">
                <a className={"nav-link" + isActive("/Products")}>Products</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Cart">
                <a className={"nav-link" + isActive("/Cart")}>
                  <i className="fas fa-shopping-cart" aria-hidden="true"></i>{" "}
                  &nbsp;Cart
                </a>
              </Link>
            </li>
            {Object.keys(auth).length === 0 ? (
              <li className="nav-item">
                <Link href="/Login">
                  <a className={"nav-link" + isActive("/Login")}>
                    <i className="fas fa-user" aria-hidden="true"></i> Sign in
                  </a>
                </Link>
              </li>
            ) : (
              loggedRouter()
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
