import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('segmento') segment: IonSegment

  superHeroes: Observable<any[]>

  valorSegmento: string

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //this.segment.value = 'todos'
    this.superHeroes = this.dataService.getSuperheroes()
  }

  segmentChanged(event) {
    this.valorSegmento = event.detail.value

    if(this.valorSegmento === 'todos') {
      this.valorSegmento = ''
    }

    console.log(this.valorSegmento)
  }

}
