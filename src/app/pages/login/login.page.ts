import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: Usuario=
  {
    username: null,
    password: null
  };

  constructor(private alertController: AlertController , private router: Router, private storage: Storage) { }

  ngOnInit() {
  }


  onSubmit()
  {
    this.validaruser(this.user);
  }


  async validaruser(u: Usuario)
  {
    let usuario= await this.storage.get(u.username);
    if(usuario!=null)
    {
      if(u.password===usuario.password)
      {
        console.log('Ok!');
        await this.storage.set('sesion',1);
        this.router.navigate(['./home']);
        let navigationextras: NavigationExtras={
          state: {
            miusuario:this.user
          }
        };
        this.router.navigate(['/home'],navigationextras);
      }
      else
      {
        this.presentAlert();
      }
    }
    else
    {
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'miClase',
      header: 'Error',
      subHeader: 'No se ha podido iniciar sesión',
      message: 'Reingrese usuario y/o contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }
}
