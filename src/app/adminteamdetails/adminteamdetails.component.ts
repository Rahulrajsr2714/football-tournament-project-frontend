import { AdminService } from './../services/admin.service';
import { MatchFixture } from './../models/match.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TeamDetails } from '../models/team.model';

@Component({
  selector: 'app-adminteamdetails',
  templateUrl: './adminteamdetails.component.html',
  styleUrls: ['./adminteamdetails.component.css']
})
export class AdminteamdetailsComponent implements OnInit {

  teamId:number;
  teamData:{fixtures:MatchFixture[],team:TeamDetails};
  constructor(private route:ActivatedRoute,private adminService:AdminService) { }

  ngOnInit(): void {
    this.teamId = this.route.snapshot.params['id'];
    this.adminService.getTeamDetails(this.teamId)
      .subscribe((resp)=>{
          this.teamData = resp;
          console.log(this.teamData)
        })
  }

}
