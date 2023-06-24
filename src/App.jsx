import Layout from "./Layout";
import NavbarApp from "./component/NavbarApp/NavbarApp";
import "./App.scss";
function App() {
  return (
    <div>
      <div>
        <NavbarApp />
      </div>
      <div className="container mt-5">
        okk
        <Layout />
      </div>
    </div>
  );
}

export default App;
