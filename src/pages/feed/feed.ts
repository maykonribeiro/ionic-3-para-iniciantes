import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  //propriedade             
  public nome_usuario:string = "Maykon Diego Silva RIbeiro";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void {
    alert(num1 + num2); 
  } 

  ionViewDidLoad() {
     //chamando o método para carregar ao iniciar a pagina
     // this.somaDoisNumeros(10, 15);
  }

}
