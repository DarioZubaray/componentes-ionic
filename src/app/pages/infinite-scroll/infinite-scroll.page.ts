import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = new Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguiente')

    setTimeout( () => {

      if (this.data.length > 70) {
        event.target.complete()
        this.infiniteScroll.disabled = true;
        return
      }
      const nuevoArr = new Array(20)
      this.data.push(...nuevoArr)
      event.target.complete()
    }, 1000);
  }
}
