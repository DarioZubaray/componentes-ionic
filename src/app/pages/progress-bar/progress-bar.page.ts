import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje = 0.5
  tipo = "determinate"

  constructor() { }

  ngOnInit() {
  }

  cambioRango(event) {
    this.porcentaje = event.detail.value / 100
  }

  onCheckClick() {
    if (this.tipo == "determinate") {
      this.tipo = "indeterminate"
    } else {
      this.tipo = "determinate"
    }
    console.log("check", this.tipo);
  }
}
