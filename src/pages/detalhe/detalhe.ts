import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cursos } from '../../interfaces/cursos';
import { ServicesApiProvider } from '../../providers/services-api/services-api';

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  curso: Cursos;
  baseUrlImgGaleria: string = "http://localhost/teste-ezoom/public/uploads/imgs_galeria/";
  baseUrlImgPrincipal: string = "http://localhost/teste-ezoom/public/uploads/imgs_principais/";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cursosService: ServicesApiProvider
  ) {
    this.curso = this.navParams.get('curso');
    this.formatandoLinkImagens();
  }

  formatandoLinkImagens () {
    this.curso.img_galeria_link = this.curso.img_galeria.split(',');
    this.curso.img_galeria_link.pop();
  }

}
