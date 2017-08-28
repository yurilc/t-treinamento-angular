import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../service.model';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

  @Input() service = new Service('', 0);
  @Output() serviceSaved = new EventEmitter<Service>();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.serviceSaved.next(this.service);
  }

}
