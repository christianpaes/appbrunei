import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(public toastController: ToastController) {}

  ngOnInit() {
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sultão de Brunei é um dos homens mais ricos do mundo.',
      duration: 2000
    });
    toast.present();
  }
  async presentToast2() {
    const toast = await this.toastController.create({
      message: 'Seu carro oficial é um Rolls Royce banhado a ouro.',
      duration: 2000
    });
    toast.present();
  }

  async presentToast3() {
    const toast = await this.toastController.create({
      message: 'Seu palácio tem 1800 quartos e é o maior do mundo, sendo 4 vezes maior que o de Versalhes.',
      duration: 2000
    });
    toast.present();
  }

  async presentToast4() {
    const toast = await this.toastController.create({
      message: 'Em um de seus aniversários, ele contratou um show particular do Michael Jackson.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
