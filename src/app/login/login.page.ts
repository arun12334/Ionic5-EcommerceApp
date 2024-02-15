import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  onSubmit() {
    // Replace the hardcoded username and password with your actual values for login validation.
    const validUsername = 'arun';
    const validPassword = '123';

    

    if (this.username === validUsername && this.password === validPassword) {
      // Login successful. Navigate to the home page.
      this.router.navigateByUrl('/home');
      // Show a success toast message
      this.presentToast('Login successfully!');
    } else {
      // Invalid credentials. Show an alert.
      this.presentAlert('Invalid Credentials', 'Please enter a valid username and password.');
    }
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duration in milliseconds for how long the toast message should be shown
      position: 'top', // Position of the toast message on the screen
      color: 'success' // Color of the toast (you can use other colors such as 'primary', 'danger', 'warning', etc.)
    });

    await toast.present();
  }
}
