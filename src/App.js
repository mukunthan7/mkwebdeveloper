// import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Topcontainer } from "./components/Topcontainer";
import { Skillcontainer } from "./components/Skillcontainer";
import { Contact } from "./components/Contact";
import { Technology } from "./components/Technology";
function App() {
  return (
    <div>
      <Header />
      <Topcontainer />
      <Skillcontainer />
      <Technology />
      <Contact />
    </div>
  );
}

export default App;
