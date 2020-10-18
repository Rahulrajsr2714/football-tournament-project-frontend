import { Pagination } from './../models/pagination.model';
import { MatchFixture } from './../models/match.model';
import { TeamCount } from './../models/team.model';
import { Injectable } from '@angular/core';
import { AppSettings } from './../app.settings';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private router: Router) { }

  getTeamCount(){
    return this.http.get<TeamCount>(AppSettings.API_ENDPOINT+'get-team-count')
  }

  addTeam(name:string,players:string,coach:string,manager:string){
    return this.http.post(AppSettings.API_ENDPOINT+'add-team',{teamname:name,players:players,coachname:coach,managername:manager})
  }

  getMatchFixture(pageNum:number){
    return this.http.get<{results:MatchFixture[],links:Pagination}>(AppSettings.API_ENDPOINT+'get-fixture?page='+pageNum);
  }
}
