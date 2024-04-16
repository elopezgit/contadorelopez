import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Info from "./components/Info";
import Contador from "./components/Contador";


function App() {
  return (
    <main className="container my-5">
      <h1>Primer proyecto con react</h1>
      <Info comision = 'c89i'></Info>
      <Contador></Contador>
    </main>
  );
}

export default App;
