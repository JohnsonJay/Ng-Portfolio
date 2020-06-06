import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {}

}
