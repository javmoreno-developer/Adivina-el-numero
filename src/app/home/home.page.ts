import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  respuesta: number;
  inputNumber: number;
  estado: String = "undefined";
  minNumber: number = 0;
  maxNumber: number = 10;

  constructor(private alertController: AlertController) {
    this.rebuildNumber();
  }

  rebuildNumber() {
    this.respuesta = Math.floor(Math.random() * this.maxNumber) + this.minNumber;
    this.tryNumber();
    console.log(this.respuesta);
  }

  tryNumber() {
    if (this.inputNumber == this.respuesta) {
      this.estado = "acertado";
      this.presentAlert();
    } else if (this.inputNumber < this.respuesta) {
      this.estado = "menor";
    } else {
      this.estado = "mayor";
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¡Has Acertado!',
      message: 'El numero era: ' + this.respuesta,
      buttons: [
        {
          text: 'Volver a jugar',
          handler: () => {
            window.location.reload()
          }
        },
      ]
    });

    await alert.present();


  }

  

}

