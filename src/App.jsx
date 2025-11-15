import { useState } from "react";

import Perfil from "./components/Perfil"; // quando coloca o nome como "index" o react interpreta e omite o nome
import ReposList from "./components/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <> 
      <input placeholder="Digite seu @ do Github" type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <> 
          <Perfil nomeUsuario={nomeUsuario} /> {/* dar os arumentos dentro da tag */}
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
