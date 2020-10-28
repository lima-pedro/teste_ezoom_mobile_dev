import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cursos } from '../../interfaces/cursos';
import { ServicesApiProvider } from '../../providers/services-api/services-api';
import { DetalhePage } from '../detalhe/detalhe'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cursos: Cursos[];
  baseUrlImgPrincipal: string = "http://localhost/teste-ezoom/public/uploads/imgs_principais/";

  constructor(
    public navCtrl: NavController,
    public cursoService: ServicesApiProvider
  ) {
    this.cursoService.read().subscribe(cursos => {
      this.cursos = cursos
      console.log(cursos)
    })
  }

  detalhe (curso: Cursos) {
    this.navCtrl.push(DetalhePage, {
      curso: curso
    })
  }

}
