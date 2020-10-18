import { AdminService } from './../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { TeamDetails } from '../models/team.model';

@Component({
  selector: 'app-adminlistteams',
  templateUrl: './adminlistteams.component.html',
  styleUrls: ['./adminlistteams.component.css']
})
export class AdminlistteamsComponent implements OnInit {

  teamsList:TeamDetails[]
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAllTeamsList().subscribe(
      (resp)=>{
        this.teamsList = resp
      },
      (err)=>{})
  }

}
