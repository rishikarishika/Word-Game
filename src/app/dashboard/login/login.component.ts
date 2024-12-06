import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string = '';

  ngOnInit() {
  }

  constructor(private authService: AuthService) {}


  login(): void {
    if (this.authService.login(this.username)) {
      // Navigate to another page is handled in AuthService
      
    } else {
      alert('Login failed');
    }
  }
}
