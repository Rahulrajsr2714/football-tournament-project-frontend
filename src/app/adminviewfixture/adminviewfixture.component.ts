import { Pagination } from './../models/pagination.model';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatchFixture } from '../models/match.model';

@Component({
  selector: 'app-adminviewfixture',
  templateUrl: './adminviewfixture.component.html',
  styleUrls: ['./adminviewfixture.component.css']
})
export class AdminviewfixtureComponent implements OnInit {

  matches:MatchFixture[]
  showUpdateModal:boolean = false
  updatePointMatch:MatchFixture = null
  currentpage:number
  paginationData:Pagination
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getMatchFixture(1).subscribe((resp)=>{
      this.matches = resp.results
      this.paginationData = resp.links
      this.currentpage = resp.links.current

    })
  }

  showPointsUpdateModal(match:MatchFixture){
    this.showUpdateModal = !this.showUpdateModal
    this.updatePointMatch = match
    console.log("Hioo");
  }

  fetchFixture(){
    this.showUpdateModal = !this.showUpdateModal
    this.updatePointMatch = null
    this.dataService.getMatchFixture(this.currentpage).subscribe((resp)=>{
      this.matches = resp.results
    })
  }

  fetchPaginatedResult(page: number) {
    this.dataService
      .getMatchFixture(page)
      .subscribe((resp) => {
        this.matches = resp.results
        this.paginationData = resp.links
        this.currentpage = resp.links.current
      });
  }

  disableModal(){
    this.showUpdateModal = !this.showUpdateModal
    this.updatePointMatch = null
  }

}
