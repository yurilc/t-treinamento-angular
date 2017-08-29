import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-switch',
  templateUrl: './demo-switch.component.html',
  styleUrls: ['./demo-switch.component.css']
})
export class DemoSwitchComponent implements OnInit {

  paises = [
    { sigla: 'BR', nome: 'Brasil'},
    { sigla: 'US', nome: 'Estado Unidos'},
    { sigla: 'JP', nome: 'Japão'},
    { sigla: 'ES', nome: 'Espanha'}
  ]

  pais: string;

  constructor() { }

  ngOnInit() {
  }

}
