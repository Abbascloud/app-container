import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`about`}>second</Link>
          </li>
          <li>
            <Link to={`shop`}>first</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
