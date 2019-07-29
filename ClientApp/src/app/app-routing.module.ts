import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaInstitucionComponent } from './lista-institucion/lista-institucion.component';
import { InstitucionAddComponent } from './docenteadd/institucion-add.component';

const routes: Routes = [
  {
  path:'lista',
  component:ListaInstitucionComponent
  },
   
  {
    path:'agregar',
    component:InstitucionAddComponent
    },
 
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
