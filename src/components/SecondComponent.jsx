import React from 'react';

const SecondComponent = () => {
    const pessoas = [
        { nome: "Maria Clara", idade: 22, profissao: "enfermeira" },
        { nome: "Erica", idade: 21, profissao: "desenvolvedora" },
        { nome: "Maria Antonia", idade: 23, profissao: "arquiteta" },
        { nome: "Yasmin", idade: 21, profissao: "veterinaria" },
        { nome: "Ana Beatriz", idade: 22, profissao: "analista de sistema" }
    ];

    const PessoasOrdenadas = [...pessoas].sort((a, b) => a.nome.localeCompare(b.nome));

    return (
        <div>
            <h1>Lista de pessoas</h1>
            <ol>
                {pessoas.map((pessoa) => (
                    <li key={pessoa.nome}>
                        <strong>Nome:</strong> {pessoa.nome}, <strong>Idade:</strong> {pessoa.idade}, <strong>Profissão:</strong> {pessoa.profissao}
                    </li>
                ))}
            </ol>

            <h2>Lista alfabética</h2>
            <ul>
                {PessoasOrdenadas.map((pessoa) => (
                    <li key={pessoa.nome}>
                        <strong>Nome:</strong> {pessoa.nome}, <strong>Idade:</strong> {pessoa.idade}, <strong>Profissão:</strong> {pessoa.profissao}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SecondComponent;
