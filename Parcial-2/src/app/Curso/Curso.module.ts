import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoListComponent } from './Curso-List/Curso-List.component';
import { CursoDetailComponent } from './Curso-Detail/Curso-Detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursoListComponent, CursoDetailComponent],
  exports: [CursoListComponent],

})
export class CursoModule { }
