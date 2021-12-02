import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';



@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {

  constructor (private alertController: AlertController, 
               private actionSheetController: ActionSheetController,  
               private socialSharing: SocialSharing) { }

  ngOnInit() {
  }
  async presentActionSheet() {

    let url='https://lenn0h.github.io/';
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona una opción',
      cssClass: 'miClase',
      buttons: [{
        text: 'Compartir',
        icon: 'share-social',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share('Hola, Tu viaje se generó de forma correcta, dirigete al estacionamiento de Duoc UC y reunete con tu conductor','Confirmar Viaje',null,url);
        }
      },{
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  
}
