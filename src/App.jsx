import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Info from "./components/Info";


function App() {
  return (
    <main className="container my-5">
      <h1>Primer proyecto con react</h1>
      <Info comision = 'c89i'></Info>
    </main>
  );
}

export default App;
