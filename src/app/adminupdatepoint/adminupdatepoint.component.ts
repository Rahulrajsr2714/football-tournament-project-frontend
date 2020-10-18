import { AdminService } from './../services/admin.service';
import { MatchFixture } from './../models/match.model';
import { DataService } from './../services/data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-adminupdatepoint',
  templateUrl: './adminupdatepoint.component.html',
  styleUrls: ['./adminupdatepoint.component.css']
})
export class AdminupdatepointComponent implements OnInit {


  @Input() match:MatchFixture;
  @Output() close = new EventEmitter<void>();
  @Output() editted = new EventEmitter<void>();

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
  }

  onUpdatePoint(data) {
    console.log(data)
    this.adminService.updateMatchPoint(this.match.id,
      data.teamaPoint,
      data.teambPoint).subscribe(
        (resp)=>{
          console.log(resp)
          this.editted.emit()
        },(err)=>{
          console.log(err)
          this.editted.emit()
        })
  }

  onClose() {
    this.close.emit();
  }

}
