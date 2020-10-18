import { Pagination } from './../models/pagination.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() paginationData: Pagination;

  @Output() pageNumberEmitter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.paginationData)
  }

  generateArray(n: number): number[] {
    return [...Array(n).keys()];
  }

  pageChangeHandler(pageNum: number) {
    this.pageNumberEmitter.emit(pageNum);
  }

}
