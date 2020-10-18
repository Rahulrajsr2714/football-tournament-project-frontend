import { MatchFixture } from './../models/match.model';
import { TeamDetails } from './../models/team.model';
import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  token:string;
  constructor(private httpClient:HttpClient) {
    this.token = JSON.parse(localStorage.getItem('token'))
  }

  updateMatchPoint(matchId:number,teamAPoint:number,teamBPoint:number){
    const headers = new HttpHeaders({
      Authorization: 'Token ' + this.token,
    });
    return this.httpClient.post(AppSettings.API_ENDPOINT+'admin/update-point',
    {matchId:matchId,teamapoint:teamAPoint,teambpoint:teamBPoint},{headers:headers});
    // console.log(this.token)
  }

  getAllTeamsList(){
    const headers = new HttpHeaders({
      Authorization: 'Token ' + this.token,
    });
    return this.httpClient.get<TeamDetails[]>(AppSettings.API_ENDPOINT+'admin/get-all-teams',{headers:headers})
  }

  getTeamDetails(teamId:number){
    const headers = new HttpHeaders({
      Authorization: 'Token ' + this.token,
    });

    return this.httpClient.get<{fixtures:MatchFixture[],team:TeamDetails}>(AppSettings.API_ENDPOINT+'admin/team-details/'+teamId,
    {headers:headers})
  }
}
