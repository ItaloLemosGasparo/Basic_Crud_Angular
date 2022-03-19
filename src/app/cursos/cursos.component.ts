import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {
  // Atributos
  // Só estou conseguindo criar variáveis com valor = "indefinido" por alterar o arquivo "tsconfig.json"
  // Adicionei ( "strictPropertyInitialization": false, ) logo a baixo de ( "strict": true, ). Sem os parenteses.  
  public vetorCursos:Curso[];
  public curso:Curso;
  public id:number;

  //Construtor
  constructor(private servico:CursosService) { }

  ngOnInit() { 
    this.id = -1;
    this.curso = {} as Curso; // "{} as Curso;" equivale a um "new Curso()". Aparentemente isso mudou com as atualizações do Angular
    this.vetorCursos = this.servico.listar();
  }

  //As funções abaixo estão parcialmente vindo do arquivo "cursos.service.ts" 
  //que foi ""importado"" na linha 21 com o nome sendo servico mas, aparentemente poderia ser qualquer nome.
  //cadastrar
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = {} as Curso; 
  }

  //excluir
  excluir(id:number){
    //This significa que é o ID declarado la em cima com escopo global. já sem o this significa que é o ID local da função
    this.servico.ecluir(id);
    this.curso = {} as Curso;
    this.id = -1;
  }

  //Editar
  editar(id:number){
    this.id = id;
    //Quebra de linha meramente para ficar mais legivel.
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );
  }
  //Atualiar
  atualizar(){
    this.servico.alterar(this.id, this.curso);
    this.curso = {} as Curso;
    this.id = -1;
  }
}
