import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  @ViewChild('lista') lista: IonList;
  users: Observable<any>;

  constructor(private dataService: DataService,
              private toastController: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    console.log('favorite', user)
    this.presentToast('Se guardó en favoritos')
    this.lista.closeSlidingItems()
  }

  share(user) {
    console.log('share', user)
    this.presentToast('Se ha compartido')
    this.lista.closeSlidingItems()
  }

  unread(user) {
    console.log('unread', user)
    this.presentToast('Se marcó como borrado')
    this.lista.closeSlidingItems()
  }
}
