import { useState } from "react";

import Perfil from "./components/Perfil"; // quando coloca o nome como "index" o react interpreta e omite o nome
import Formulario from "./components/Fomulario";
import ReposList from "./components/ReposList";

function App() {
  // const nome = 'arthur'

  // function retornaNome() {
  //   return nome
  // }

  // const pessoa = {
  //   nome: "Maria"
  // }

  // let estaDeDia = false;

  // const [formularioEstaVisivel, setFormularioVisivel] = useState(true);
  
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


      {/* formularioEstaVisivel && (<Formulario/>) } {/* ou sem os parênteses */}

      {/* <button onClick={() => setFormularioVisivel(!formularioEstaVisivel)} type="button">toggle form</button> se estiver true ele fica false, e se estiver false ele fica true (toggle)
      
      
      {/* <h1>Olá, {retornaNome()}</h1>
      <h2> subtitulo </h2>
      <h1>Olá, {pessoa.nome}</h1>
      <h2> {estaDeDia ? "Bom dia" : "Boa tarde"} </h2> */}
    </>
  )
}

export default App
