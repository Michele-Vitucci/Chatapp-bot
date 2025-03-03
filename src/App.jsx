
import "./App.css";
import ChatApp from "./ChatApp";
import ChatAppMockie from "./ChatAppmokie"; // Nome corretto

function App() {
  return (
    <>
      <ChatApp />
      <ChatAppMockie /> {/* Corretto con la maiuscola */}
    </>
  );
}

export default App;
