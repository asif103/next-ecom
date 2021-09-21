import { useRouter } from "next/dist/client/router";
import Link from "next/link";
function NavBar() {
  const router = useRouter();
  const isActive = (r) => {
    if (router === r) {
      return "active";
    } else {
      return "";
    }
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
          <ul className="navbar-nav ml-auto">
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
            <li className="nav-item">
              <Link href="/Login">
                <a className={"nav-link" + isActive("/login")}>
                  <i className="fas fa-sign-in-alt" aria-hidden="true"></i>{" "}
                  &nbsp;Login
                </a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User Name
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
