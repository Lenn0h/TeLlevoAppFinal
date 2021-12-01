import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crearviajes',
  templateUrl: './crearviajes.page.html',
  styleUrls: ['./crearviajes.page.scss'],
})
export class CrearviajesPage implements OnInit {


  
  

  constructor(private alertController:AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'miClase',
      header: 'TeLlevoApp',
      message: 'Generando Viaje...',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  ngOnInit() {
  }

}
