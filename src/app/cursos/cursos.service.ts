import { Injectable } from '@angular/core';
import { Curso } from './Curso';

@Injectable({
  providedIn: 'root'
})

//Classe
export class CursosService {
  //Construtor
  constructor() { }

  //Vetor de Cursos e os cursos pré adicionados.
  public vetorCursos:Curso[] = [
    new Curso("Angular",800,"Desenvolvimento"),
    new Curso("PHP",590,"Desenvolvimento"),
    new Curso("Photoshop",470,"Designe")
  ];

  //Cadastro de Curso
  public cadastrar(curso:Curso){
    this.vetorCursos.push(curso);
  }

  //Seleção de Curso
  public listar(){
    return this.vetorCursos;
  }

  //Alteração de Curso
  public alterar(id:number, curso:Curso){
    this.vetorCursos[id] = curso
  }

  //Exclusão de Curso
  public ecluir(id:number){
    this.vetorCursos.splice(id,1);
  }
}
