import { Pagination } from './../models/pagination.model';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatchFixture } from '../models/match.model';

@Component({
  selector: 'app-viewfixture',
  templateUrl: './viewfixture.component.html',
  styleUrls: ['./viewfixture.component.css']
})
export class ViewfixtureComponent implements OnInit {

  matches:MatchFixture[]
  paginationData:Pagination
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getMatchFixture(1).subscribe((resp)=>{
      this.matches = resp.results
      this.paginationData = resp.links
    })
  }

  fetchPaginatedResult(page: number) {
    this.dataService
      .getMatchFixture(page)
      .subscribe((resp) => {
        this.matches = resp.results
        this.paginationData = resp.links
      });
  }

}
