import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  errorMessage: any = null;
  constructor(private authServiece: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  submitAuthForm(data) {
    console.log(data);

      this.authServiece.login(data.username, data.password).subscribe(
        (response) => {
          this.route.navigate(['admin/list-teams']);
        },
        (errorResp) => {
          this.errorMessage = errorResp.error;
        }
      );

  }
}
