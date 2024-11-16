import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("o estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("materia a mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])


    const alteraNome = (evento) => {
        // console.log(evento.target.value);
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior)

            // estadoAnterior = valornovo

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(soma);
        console.log(media);

        if (media >= 7) {
            return (
                <p>Olá {nome}, Você foi Aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, Você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" />
            <input type="number" placeholder="Nota matériaA" onChange={evento => setMateriaA(evento.target.value)} />
            <input type="number" placeholder="Nota matériaB" onChange={evento => setMateriaB(evento.target.value)}/>
            <input type="number" placeholder="Nota matériaC" onChange={evento => setMateriaC(evento.target.value)}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario