import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: Usuario=
  {
    username: null,
    password: null
  };

  constructor(private alertcontroller: AlertController, private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.user);
    this.guardar(this.user);
    this.router.navigate(['/home']);
    this.presentAlert();
  }

  async guardar(user: Usuario)
  {
    await this.storage.set(this.user.username,user);
  }

  async presentAlert() {
    const alert = await this.alertcontroller.create({
      cssClass: 'miClase',
      header: 'Bienvenido',
      subHeader: 'Registro completado correctamente',
      message: 'Dirigite a inicio e Inicia Sesión',
      buttons: ['OK']
    });

    await alert.present();
  }

}
