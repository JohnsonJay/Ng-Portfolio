import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  downloadLink = 'https://firebasestorage.googleapis.com/v0/b/jayportfolio-e6a1e.appspot.com/o/Resume.pdf?alt=media&token=1ad84b49-16e6-4c85-bd1a-f52736cda79b';

  constructor() { }

  ngOnInit() {}

}
