import styles from './Perfil.module.css';

const Perfil = ({nomeUsuario}) => { // mesma coisa que const {endereco, nome} = props;

    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
    )
}

export default Perfil // para exportar para todos

// export default = () => {const: usuar...} //* da pra fazer assim tbm, export + constante no mesmo
// export default function() {const: usuar...} //* ou assim tbm, para declarar uma função anônima tbm