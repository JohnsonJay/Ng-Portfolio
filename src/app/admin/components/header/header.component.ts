import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  resumeDownloadLink = '#'; // Add download link here
  githubLink = '#'; // Add github link here
  twitterlink = '#'; // Add twitter link here
  linkedinLink = '#'; // You guessed it!! LinkedIn link here

  messagesCount$: Observable<any>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.messagesCount$ = this.dataService.getMessagesCount();
  }

  public logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/'], { relativeTo: this.route }))
      .catch(err => {
        console.log('Error logging out: ', err.message);
        this.router.navigate(['/'], { relativeTo: this.route });
      });
  }

}
