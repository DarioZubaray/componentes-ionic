import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions;
  customDate: any;

  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log('Clicked Save!')
          console.log(evento)
          this.customDate = new Date(evento.year.value, evento.month.value, evento.day.value).toISOString();
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  cambioFecha(event) {
    console.log("cambio fecha", event)
    console.log("Fecha", new Date(event.detail.value))
  }

}
