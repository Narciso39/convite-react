import "./App.css";

import Home from "./page/home";

function App() {
  return (
    <>
      <div className="mobile-content">
      <Home />
        </div>
        <div className="flex">
        <div className="desktop-content">
          <h1>convite não disponível em dispositivos maiores.</h1>
          <p>Por favor, acesse de um celular para usar a comanda.</p>
          </div>
          </div>
    </>
  );
}

export default App;
