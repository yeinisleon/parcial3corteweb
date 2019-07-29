import { Component, OnInit } from '@angular/core';
import {Docente } from '../models/docente';
import { ServiciosService}  from '../services/servicios.service';
@Component({
  selector: 'app-institucion-add',
  templateUrl: './institucion-add.component.html',
  styleUrls: ['./institucion-add.component.css']
})
export class InstitucionAddComponent implements OnInit {

  constructor(private servicios: ServiciosService ) { }
  docente:Docente;
  ngOnInit() {
     this.docente={id:0,tipo:'',numerodeid:'',nombre:'',profesion:'',institucion:null,IdInstituciones:0};
  }
  add() {
    this.servicios.agregarDocente(this.docente)
    .subscribe(docente => {
   
    });
    }
}
