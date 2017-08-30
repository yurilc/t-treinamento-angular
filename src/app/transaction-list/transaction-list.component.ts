import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  index: number;
  startDate: Date;
  endDate: Date;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
      }
    );
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.startDate = this.toDate(params['start']);
        this.endDate = this.toDate(params['end']);
      }
    );
  }

  toDate(value: string) {
    const array = value.split('-');
    const date = new Date(
      +array[0], +array[1] - 1, +array[2], 0, 0, 0, 0
    );
    return date;
  }

}
