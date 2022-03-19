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
  //Atributos
  public vetorCursos:Curso[];
  public curso:Curso;
  public id:number;

  //Construtor
  constructor(private servico:CursosService) { }

  ngOnInit() { 
    this.id = -1;
    this.curso = {} as Curso; // isso é igual a isso this.curso = new Curso; (Teoricamente).
    this.vetorCursos = this.servico.listar();
  }

  //estas funções estão por parte vindo do arquivo servico
  //cadastrar
  cadastrar(){
    this.servico.cadastrar(this.curso);
    this.curso = {} as Curso; // isso é igual a isso this.curso = new Curso; (Aparentemente é isso mesmo).
  }

  //excluir
  excluir(id:number){
    this.servico.ecluir(id);
    this.id = -1;
    this.curso = {} as Curso;
  }

  //Editar
  editar(id:number){
    this.id = id;
    this.curso = new Curso(
      this.vetorCursos[id].nomeCurso,
      this.vetorCursos[id].valorCurso,
      this.vetorCursos[id].areaCurso
    );

  }

}
