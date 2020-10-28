import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'header-curso',
  templateUrl: 'components-header.html'
})
export class ComponentsHeaderComponent {

  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() urlImage: string;
  @Input() botaoVoltar: string;

  constructor(
    public navCtrl: NavController,
  ) {}

  voltar () {
    this.navCtrl.pop();
  }
}
