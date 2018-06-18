import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { debounce } from 'rxjs/operators/debounce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  password: string;

  constructor(private loginService: LoginService) { }

  onSubmit(): void {
    console.log(this.username);
    console.log(this.password);
    this.loginService.verifyUser(this.username, this.password).subscribe(loggedin => {
      console.log(loggedin);
    })

  }

}
