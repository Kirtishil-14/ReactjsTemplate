import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap";
import "./App.css";
import RootContainer from "./containers/root";
import "./custom-bootstrap.scss";
import * as ServiceWorkerRegistration from "./serviceWorkerRegistration";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <RootContainer />
      </HashRouter>
    </div>
  );
}
ServiceWorkerRegistration.register();

export default App;
