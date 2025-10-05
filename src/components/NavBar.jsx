import Logo from "./Logo";
import Search from "./Search";
import NumResults from "./NumResults";
import '../App.css'


export default function NavBar({ query, setQuery, movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      <NumResults movies={movies} />
    </nav>
  );
}
