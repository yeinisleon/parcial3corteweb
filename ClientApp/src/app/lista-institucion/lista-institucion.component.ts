import { Component, OnInit } from '@angular/core';
import { Docente } from '../models/docente';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-lista-institucion',
  templateUrl: './lista-institucion.component.html',
  styleUrls: ['./lista-institucion.component.css']
})
export class ListaInstitucionComponent implements OnInit {

  docentes:Docente[];
  constructor(private servicio:ServiciosService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.servicio.getAll().subscribe(docentes=>this.docentes=docentes);
    }
}
