import React from 'react'


const FirstComponent = () => {
    const nome = "Ana";
    const sobrenome = "Alves";
    const matricula = 2324290082;
    const nomeProfessor = "Felipe Batista"
    const nomeDisciplina = "Construção de Frontend"

  return (
    <div>
      
    <h2>Lista de alunos</h2>
    <p> O meu nome completo é {nome} {sobrenome}, e minha matrícula
    é {matricula}. Meu professor é o {nomeProfessor} e a sua disciplina é {nomeDisciplina}.</p>
    </div>

  )
}

export default FirstComponent;