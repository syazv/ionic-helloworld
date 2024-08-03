import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Creating a variable in Angular of type string, initial value = "Syaz"
  name:string = "Syaz"
  age:number = 28

  userName:string = ''
  newsletterSubscribed = true
  volume = 50

  url:string = "https://leaveyourdailyhell.com/wp-content/uploads/2023/05/Malaysia-5.jpg"

  hotel = {
    "name":"Hotel Molly",
    "address":"New York City",
    "description":"This trendy hotel is newly built and has direct access to New York Mall",
    "url":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/407358646.jpg?k=d93fc6e62a8bf41658496e90e8105105150506671775b94b9af2642dcb6e1813&o=&hp=1"
  }

  scores = [10,80,100,90,30]

  hotels = [
    {
      "name": "Le Meridien Putrajaya",
      "address": "IOI City Mall Putrajaya",
      "description": "Book your stay at Le Méridien Putrajaya in Malaysia, which offers spacious hotel rooms, an outdoor pool, a modern gym and a location near IOI City Mall.",
      "url": "https://lh3.googleusercontent.com/p/AF1QipPWh_im-VqTzZJSn7d2unXxz8siVtZ6mCIZ8bes=s1360-w1360-h1020"
    },
    {
      "name": "Park Inn by Radisson Putrajaya",
      "address": "Taman Unipark Suria, Kajang",
      "description": "Park Inn by Radisson Putrajaya terletak di Putrajaya, 2.8 km dari IOI City Mall. Ia menawarkan penginapan dengan restoran, parking peribadi serta kolam",
      "url": "https://lh3.googleusercontent.com/p/AF1QipMR5nZWJU0axKDCDiwR4XgKOTm1ckfVReBlla7Y=s1360-w1360-h1020"
    },
    {
      "name": "Cyberview Spa Resort",
      "address": "The Lodge, Cyberjaya",
      "description": "A 5 star boutique Resort set on a paradise of 28.8 acre with award winning landscaped gardens offering Malaysian hospitality.",
      "url": "https://lh3.googleusercontent.com/proxy/yq26y4459jlvEdUZgExECiGId1OSYL1QkV1qKTeg8WTQCtR8FBio3WYJMtpmbYSNB4gaycSbgHp429p6aacnlp-OFsD-gq2mAfTxyFMmQkV5tCVcDQJyneUU_v_Te9kPmUWX_IQnYwPzWntlgc1k55WkDkEVaA=s1360-w1360-h1020"
    }
  ]
 
  // Dependency Injection (import and initialize)
  // I initialize an AlertController and call it alertCtrl
  constructor(private alertCtrl:AlertController, private actionSheetCtrl:ActionSheetController, private toastCtrl: ToastController) {}

  doSomething(){
    alert("Hello World")
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: "Hello World",
      message:"Welcome to my app",
      buttons:['OK']
    })
    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header:"Select the Actions",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          data: {
            action: 'delete'
          }
        },
        {
          text: "Share",
          data:{
            action: 'share'
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          data: {
            action: 'cancel'
          }
        }
      ]
    })
    await actionSheet.present()
  }
 
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message:"Toast has been pressed",
      duration:3000
    })
    await toast.present()
  }
}
