import { Link } from "react-router-dom";
import search from "../../assets/icons/search.svg";
import logo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

export default function Header() {
  const { auth, setAuth } = useAuth();
  const { state } = useProfile();
  const handleLogout = () => {
    setAuth({});
  };

  const user = state?.user ?? auth?.user;

  return (
    <header>
      <nav className="container">
        <div>
          <Link to="/">
            <img className="w-32" src={logo} alt="lws" />
          </Link>
        </div>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/create-blog"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={search} alt="Search" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              {user ? (
                <Link
                  onClick={handleLogout}
                  to="/login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              )}
            </li>
            <li className="flex items-center">
              <div className="avater-img bg-orange-600 text-white">
                {/* <span className="">S</span> */}
                <img
                  className="max-w-full rounded-full"
                  src={`${
                    import.meta.env.VITE_SERVER_BASE_URL
                  }/uploads/avatar/${state?.user?.avatar}`}
                  alt=""
                />
              </div>

              <Link to="/me">
                <span className="text-white ml-2">
                  {user?.firstName} {user?.lastName}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
