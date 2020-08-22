import { Component, OnInit } from '@angular/core';
import { ɵBrowserPlatformLocation } from '@angular/common';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['aquaman', 'superman', 'batman', 'flash', 'Mujer maravilla']
  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    //console.log('reorder', event)

    const itemMover = this.personajes.splice(event.detail.from, 1)[0]
    this.personajes.splice(event.detail.to, 0, itemMover)
    event.detail.complete()
  }

  onClick() {
    console.log(this.personajes)
  }
}
