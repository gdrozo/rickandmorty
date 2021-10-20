import { Gallery } from "./components/Gallery";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ISIS3710</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Counter</a>
              </li>
            </ul>
        </div>
      </nav>
      <br></br>
      <div className="container">
        <Gallery></Gallery>  
      </div>
    </>
  );
}

export default App;
