import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  public onSubmit() {
    const userDetails = this.login.value;
    const isAuthenticated = this.authService.login(userDetails.username, userDetails.password);

    isAuthenticated
      .then(() => this.router.navigate(['auth/admin']))
      .catch(err => {
        console.log('Authentication error: ', err.message);
        this.router.navigate(['/'], { relativeTo: this.route });
      });
  }

}
