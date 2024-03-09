import BrowserRouter from "./BrowserRouter";
import Route from "./Route";
import Link from "./Link";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path={"/"}>
          <h1> welcome to our website</h1>
        </Route>
        <Route path={"/home"}>
          <h1>welcome to the home page</h1>
        </Route>
        <Route path={"/profile"}>
          <h1>welcome to the profile page</h1>
          <button>
            <Link to="/2">
              <p> helllo </p>
            </Link>
          </button>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
