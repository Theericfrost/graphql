import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand w-100" href="/">
          <div className="d-flex w-100">
            <div>Graphql</div>
            <div className="ms-auto">
              <Link to="">Projects</Link>
              <Link to="clients" className="ms-2">Clients</Link>
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
}
