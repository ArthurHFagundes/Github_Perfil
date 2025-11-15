import { useState, useEffect } from "react" // hooks do React

const Formulario = () => {
    const [materiaA, setmateriaA] = useState(); // [valor para se atribuido, e função para altera-lo ]
    const [materiaB, setmateriaB] = useState(); // useState() função de alteração
    const [materiaC, setmateriaC] = useState();



    const [nome, setNome ] = useState(''); // ('') indica uma string //* setNome + useState = "Set State"

    useEffect(() => {  // exemplo de aplicação: {exibeFormulario && (<Formulario/>)} //* da pra usar props no (argumento) e no [valor] e/ou um atributo
        console.log("o estado nome mudou!");
    }, [nome]) // mostra a mensagem quando o "nome" muda (pode ser mais valores, já que é um array)

    useEffect(() => {
        console.log("o estado matéria A mudou para: " + materiaA)
    }, [materiaA]) // se deixar sem nada nos [] ele faz a ação se qualquer coisa muda ou inicaliza (se é montada)



    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            // console.log(estadoAnterior); // vai retornar um valor anterior ao digitado atualmente

            return evento.target.value; // manter imutabiliade do valor //* não alteramos o valor mas subtituimos totalmente o valor (altermos o valor e a propriedade) //
        }) //? ler mais: "pure functions"
    }



    const renderizaResultado = () => { // 1° mount
        const soma = materiaA + materiaB + materiaC; // 2° updated
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p> Olá {nome}, você foi aprovado! </p>
            )
        } 
        else {
            return ( // 3° unmount
                <p> Olá {nome}, você não foi aprovado </p>
            )
        }
    }

    return (
        <form >

        <ul>
            {[1,2,3,4,5].map( item => ( //todo 6:56
                <li key={item}> {item} </li>
            ))}
        </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota Matéria A" onChange={evento => setmateriaA(parseInt(evento.target.value))} /> {/* onChange é o mesmo que @change */}
            <input type="number" placeholder="Nota Matéria B" onChange={({target}) => setmateriaB(parseInt(target.value))}/> {/* usando desestruturação */}
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()} {/* em <p> */}
        </form>
    )
}
{/**/}
export default Formulario
