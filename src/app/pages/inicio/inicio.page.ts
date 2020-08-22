import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'logo-google-playstore',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      name: 'Botones',
      redirecTo: '/botones'
    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirecTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check',
      redirecTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirecTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Floating Action Button',
      redirecTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirecTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirecTo: '/infinite-scroll'
    },
    {
      icon: 'hammer-outline',
      name: 'Inputs Form',
      redirecTo: '/input'
    },
    {
      icon: 'list-outline',
      name: 'Lista Slidding',
      redirecTo: '/lista'
    },
    {
      icon: 'reorder-four-outline',
      name: 'Lista Reorder',
      redirecTo: '/list-reorder'
    },
    {
      icon: 'refresh-circle-outline',
      name: 'Loading',
      redirecTo: '/loading'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}
