import { Component, OnInit } from '@angular/core';
import { Curso } from '../Curso';
import { CursoService } from '../Curso.service';

@Component({
  selector: 'app-Curso-List',
  templateUrl: './Curso-List.component.html',
  styleUrls: ['./Curso-List.component.css'],
})
export class CursoListComponent implements OnInit {
  cursos: Array<Curso> = [];
  selectedCurso!: Curso;
  selected = false;

  constructor(private cursoService: CursoService) {}


  getCursos() {
    this.cursoService.getCursos().subscribe((cursos) => (this.cursos = cursos));
  }


  onSelected(curso: Curso) {
    this.selectedCurso = curso;
    this.selected = true;
  }
  ngOnInit() {
    this.getCursos()
  }

}
