import { TeamCount } from './../models/team.model';
import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {

  teamCount:number
  successMessage:string = null
  errorMessage:string = null
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTeamCount().subscribe((resp:TeamCount)=>{
      this.teamCount = resp.count
    })
  }

  submitAddTeamForm(data,addTeamForm:NgForm){
    this.dataService.addTeam(data.teamname,data.players,data.coachname,data.managername).subscribe((resp)=>{
      this.successMessage = "Team registered successfully"
      this.dataService.getTeamCount().subscribe((resp:TeamCount)=>{
        this.teamCount = resp.count
      })
      addTeamForm.form.reset()
    },(err)=>{
      this.errorMessage = "Something went wrong please try again"
      this.dataService.getTeamCount().subscribe((resp:TeamCount)=>{
        this.teamCount = resp.count
      })
    })
  }

}
