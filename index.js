// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


// implementação
function adicionarAluno(nome){
    alunosDaEscola.push(nome);
    console.log(nome + ' adicionado com sucesso!');
    return;
}


function listarAlunos(){
    for (var i=0; i<alunosDaEscola.length; i++){
        console.log("--------------------------")
        console.log("Nome: ", alunosDaEscola[i].nome);
        console.log("Notas: ", alunosDaEscola[i].notas)
        console.log("Cursos: ", alunosDaEscola[i].cursos)
        console.log("Faltas: ", alunosDaEscola[i].faltas)
    }
}


function buscarAluno(nome){
    let alunoBuscado = alunosDaEscola.find(aluno => aluno.nome == nome);
    if (alunoBuscado){
        console.log("--------------------------")
        console.log("Registro encontrado:")
        console.log("Nome: ", alunoBuscado.nome);
        console.log("Notas: ", alunoBuscado.notas);
        console.log("Cursos: ", alunoBuscado.cursos);
        console.log("Faltas: ", alunoBuscado.faltas); 
        console.log("--------------------------")
        return true;  
    } else {
        console.log("Aluno não encontrado!");
        return false;
    }            
}


function matricularAluno(aluno, curso){
    if (buscarAluno(aluno.nome)){
        for (var i=0; i<alunosDaEscola.length; i++){
            if (aluno.nome == alunosDaEscola[i].nome){
                alunosDaEscola[i].cursos.push(curso, new Date);
                console.log("Aluno matriculado com sucesso!")
                console.log("Nome: ", alunosDaEscola[i].nome);
                console.log("Cursos: ", alunosDaEscola[i].cursos)
                console.log("--------------------------")
            }
        }
    }
}


function aplicarFalta(aluno){
    if (aluno.cursos.length == 0){
        console.log("Erro: Aluno deve estar matriculado em algum curso!")
    }
    else{
        aluno.faltas ++
        console.log("--------------------------")
        console.log("Nova falta aplicada ao aluno:")
        console.log("Nome: ", aluno.nome);
        console.log("Faltas: ", aluno.faltas); 
        console.log("--------------------------")
    }
}


function aplicarNota(aluno, nota){
    if (aluno.cursos.length == 0){
        console.log("Erro: Aluno deve estar matriculado em algum curso!")
    }
    else{
        aluno.notas.push(nota)
        console.log("--------------------------")
        console.log("Nova nota registrada ao aluno:")
        console.log("Nome: ", aluno.nome);
        console.log("Notas: ", aluno.notas); 
        console.log("--------------------------")
    }
}


function aprovarAluno(aluno){
    if (aluno.cursos.length == 0){
        console.log("Erro: Aluno deve estar matriculado em algum curso!")
    }
    else{
        let somaNotas = aluno.notas.reduce((acumulador, valorAtual) => acumulador + valorAtual);
        let mediaNotas = somaNotas / aluno.notas.length;
        if( aluno.faltas <= 3 && mediaNotas >= 7 ){
            console.log("Aluno aprovado!")
        } else{
            console.log("Aluno reprovado!")
        }
    }
}

