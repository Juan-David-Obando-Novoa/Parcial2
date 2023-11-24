import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../Curso';

@Component({
  selector: 'app-Curso-detail',
  templateUrl: './Curso-Detail.component.html',
  styleUrls: ['./Curso-Detail.component.css'],
})
export class CursoDetailComponent implements OnInit {
  @Input() cursoDetail!: Curso;

  constructor() {}

  ngOnInit() {}
}

