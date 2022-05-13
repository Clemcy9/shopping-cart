import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/loading";
import Nav from "./views/navBar";
import Hero from "./views/hero";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      {/* <Loading></Loading> */}
    </div>
  );
}

export default App;
